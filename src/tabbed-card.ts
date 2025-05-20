import { LitElement, html, PropertyValueMap, nothing } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardConfig,
  LovelaceCardEditor,
} from "custom-card-helpers";
import "./registry-patch.ts";
import "./tabbed-card-editor";
import "@material/web/tabs/tabs.js";
import "@material/web/icon/icon.js";

interface TabsActivatedEvent extends Event {
  detail: {
    index: number;
  };
}

interface TabbedCardConfig extends LovelaceCardConfig {
  options?: options;
  styles?: object;
  attributes?: object;
  tabs: Tab[];
}

interface options {
  defaultTabIndex?: string | number | undefined;
}

interface Tab {
  styles?: object;
  attributes?: {
    label?: string;
    icon?: string;
    minWidth?: boolean;
    stacked?: boolean;
    hide?: boolean | string; // Option to hide the tab
    disable?: boolean | string; // Option to disable the tab
  };
  card: LovelaceCardConfig;
}

@customElement("tabbed-card-programmable")
export class TabbedCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() protected selectedTabIndex = 0;
  @property() private _helpers: any;

  @state() private _config!: TabbedCardConfig;
  @state() private _tabs!: Tab[];
  @state() private _hiddenTabs: boolean[] = [];
  @state() private _disabledTabs: boolean[] = [];
  @property() protected _styles = {
    "--md-sys-color-primary": "var(--primary-text-color)", // Color of the activated tab's text, indicator, and ripple.
    "--md-sys-color-on-surface-variant":
      "rgba(var(--rgb-primary-text-color), 0.8)", // Color of an unactivated tab label.
    "--md-sys-color-on-surface": "rgba(var(--rgb-primary-text-color), 0.7)", // Color of an unactivated icon.
    "--md-sys-typescale-label-large-font-size": "14px",
  };

  private async loadCardHelpers() {
    this._helpers = await (window as any).loadCardHelpers();
  }

  static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement("tabbed-card-editor");
  }

  static getStubConfig() {
    return {
      options: {},
      tabs: [
        {
          card: { type: "entity", entity: "sun.sun" },
          attributes: { label: "Sun" },
        },
      ],
    };
  }

  public setConfig(config: TabbedCardConfig) {
    if (!config) {
      throw new Error("No configuration.");
    }

    this._config = config;

    this._styles = {
      ...this._styles,
      ...this._config.styles,
    };

    this.loadCardHelpers();
  }

  protected willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    if (_changedProperties.has("_helpers")) {
      this._createTabs(this._config);
    }
    if (_changedProperties.has("hass") && this._tabs?.length) {
      this._tabs.forEach((tab) => (tab.card.hass = this.hass));
    }
  }

  async _createTabs(config: TabbedCardConfig) {
    const template = config?.options?.defaultTabIndex;
    if (typeof template === "undefined") {
      this.selectedTabIndex = 0;
    } else if (typeof template === "string") {
      const result = await this.evaluateJinjaTemplate(
        this.hass,
        template || "0",
      );
      // Try to parse the result as a number, if it fails, default to 0 (first tab)
      this.selectedTabIndex = parseInt(result) || 0;
    } else {
      this.selectedTabIndex = isFinite(template) ? template : 0;
    }

    // Initialize arrays to track hidden and disabled states
    this._hiddenTabs = [];
    this._disabledTabs = [];

    const tabs = await Promise.all(
      config.tabs.map(async (tab) => {
        // Check if tab should be hidden
        let hideTab = false;
        if (tab.attributes?.hide !== undefined) {
          if (typeof tab.attributes.hide === "string") {
            // Evaluate Jinja template
            const hideResult = await this.evaluateJinjaTemplate(
              this.hass,
              tab.attributes.hide,
            );
            hideTab = hideResult.toLowerCase() === "true";
          } else {
            hideTab = !!tab.attributes.hide;
          }
        }
        this._hiddenTabs.push(hideTab);

        // Check if tab should be disabled
        let disableTab = false;
        if (tab.attributes?.disable !== undefined) {
          if (typeof tab.attributes.disable === "string") {
            // Evaluate Jinja template
            const disableResult = await this.evaluateJinjaTemplate(
              this.hass,
              tab.attributes.disable,
            );
            disableTab = disableResult.toLowerCase() === "true";
          } else {
            disableTab = !!tab.attributes.disable;
          }
        }
        this._disabledTabs.push(disableTab);

        // Create tab (even if hidden)
        return {
          styles: tab?.styles,
          attributes: { ...config?.attributes, ...tab?.attributes },
          card: await this._createCard(tab.card),
        };
      }),
    );

    this._tabs = tabs;

    // If the selected tab is hidden, find the first visible tab
    if (this._hiddenTabs[this.selectedTabIndex]) {
      const visibleTabIndex = this._hiddenTabs.findIndex((hidden) => !hidden);
      if (visibleTabIndex >= 0) {
        this.selectedTabIndex = visibleTabIndex;
      }
    }

    // If the selected tab is disabled, find the first non-disabled and visible tab
    if (this._disabledTabs[this.selectedTabIndex]) {
      for (let i = 0; i < this._tabs.length; i++) {
        if (!this._hiddenTabs[i] && !this._disabledTabs[i]) {
          this.selectedTabIndex = i;
          break;
        }
      }
    }
  }

  async _createCard(cardConfig: LovelaceCardConfig) {
    const cardElement = await this._helpers.createCardElement(cardConfig);

    cardElement.hass = this.hass;

    cardElement.addEventListener(
      "ll-rebuild",
      (ev: Event) => {
        ev.stopPropagation();
        this._rebuildCard(cardElement, cardConfig);
      },
      { once: true },
    );

    return cardElement;
  }

  async _rebuildCard(
    cardElement: LovelaceCard,
    cardConfig: LovelaceCardConfig,
  ) {
    console.log("_rebuildCard: ", cardElement, cardConfig);

    const newCardElement = await this._helpers.createCardElement(cardConfig);

    cardElement.replaceWith(newCardElement);

    // TODO: figure out a way to update the tabs array with the rebuilt card
    // this._tabs.splice(this._tabs.indexOf(cardElement), 1, newCardElement);
  }

  async evaluateJinjaTemplate(
    hass: HomeAssistant,
    template: string,
  ): Promise<any> {
    return new Promise((resolve) => {
      hass.connection.subscribeMessage(
        (msg: { result: string | Record<string, unknown> }) =>
          resolve(msg.result.toString()),
        {
          type: "render_template",
          template: template,
        },
      );
    });
  }

  render() {
    if (!this.hass || !this._config || !this._helpers || !this._tabs?.length) {
      return html``;
    }

    // Filter visible tabs for rendering, but maintain original indices
    const visibleTabs = this._tabs
      .map((tab, index) => ({ tab, index }))
      .filter(({ index }) => !this._hiddenTabs[index]);

    // If no visible tabs, return empty
    if (visibleTabs.length === 0) {
      return html``;
    }

    // Find the index of the selected tab in the visible tabs array
    const activeVisibleIndex = visibleTabs.findIndex(
      ({ index }) => index === this.selectedTabIndex,
    );

    return html`
      <md-tabs
        @change=${(ev: TabsActivatedEvent) => {
          // Map the visible tab index back to the original tab index
          const visibleIndex = ev.detail.index;
          const originalIndex = visibleTabs[visibleIndex].index;

          // Only update selectedTabIndex if the tab is not disabled
          if (!this._disabledTabs[originalIndex]) {
            this.selectedTabIndex = originalIndex;
          }
        }}
        style=${styleMap(this._styles)}
        .activeTabIndex=${activeVisibleIndex >= 0 ? activeVisibleIndex : 0}
      >
        ${visibleTabs.map(
          ({ tab, index }) => html`
            <md-primary-tab
              style=${ifDefined(
                styleMap({
                  ...(tab?.styles || {}),
                  // Add styling for disabled tabs
                  ...(this._disabledTabs[index]
                    ? {
                        opacity: "0.5",
                        cursor: "not-allowed",
                        "--md-sys-color-primary":
                          "var(--disabled-text-color, rgba(var(--rgb-primary-text-color), 0.5))",
                      }
                    : {}),
                }),
              )}
              ?disabled=${this._disabledTabs[index]}
              ?minWidth=${tab?.attributes?.minWidth}
              ?stacked=${tab?.attributes?.stacked}
            >
              ${tab?.attributes?.icon
                ? html`<ha-icon
                    slot="icon"
                    icon="${tab?.attributes?.icon}"
                  ></ha-icon>`
                : html``}
              <span>${tab?.attributes?.label || nothing}</span>
            </md-primary-tab>
          `,
        )}
      </md-tabs>
      <section>
        <article>
          ${this._tabs.find((_, index) => index == this.selectedTabIndex)?.card}
        </article>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tabbed-card-programmable": TabbedCard;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "tabbed-card-programmable",
  name: "Tabbed Card Programmable",
  description: "A tabbed card of cards. Programmable.",
});
