import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  HomeAssistant,
  fireEvent,
  LovelaceCardEditor,
} from "custom-card-helpers";
import { TabbedCardConfig, TabConfig } from "./types";

@customElement("tabbed-card-editor")
export class TabbedCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: TabbedCardConfig;
  @state() private _helpers?: any;
  @state() private _selectedTabIndex = 0;

  public setConfig(config: TabbedCardConfig): void {
    this._config = config;
    this.loadCardHelpers();
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._config) {
      return html``;
    }

    // Ensure tabs array exists
    const tabs = this._config.tabs || [];

    return html`
      <div class="card-config">
        <div class="tabs-container">
          <div class="tabs">
            ${tabs.map(
              (tab: TabConfig, index: number) => html`
                <div
                  class="tab ${this._selectedTabIndex === index
                    ? "selected"
                    : ""}"
                  @click=${() => this._selectTab(index)}
                >
                  ${tab.attributes?.label
                    ? tab.attributes.label
                    : `Tab ${index + 1}`}
                  <ha-icon-button
                    .path=${"M19,13H5V11H19V13Z"}
                    @click=${(e: Event) => this._removeTab(index, e)}
                  ></ha-icon-button>
                </div>
              `,
            )}
            <div class="tab add-tab" @click=${this._addTab}>
              <ha-icon-button
                .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
              ></ha-icon-button>
              Add Tab
            </div>
          </div>

          <div class="tab-content">
            ${this._renderGlobalConfig()}
            ${tabs.length > 0 && this._selectedTabIndex < tabs.length
              ? this._renderTabConfig(
                  tabs[this._selectedTabIndex],
                  this._selectedTabIndex,
                )
              : ""}
          </div>
        </div>
      </div>
    `;
  }

  private _renderGlobalConfig(): TemplateResult {
    const options = this._config?.options || {};

    return html`
      <div class="global-config">
        <h3>Global Configuration</h3>

        <ha-textfield
          label="Default Tab Index"
          .value=${options.defaultTabIndex !== undefined
            ? options.defaultTabIndex
            : ""}
          .configValue=${"defaultTabIndex"}
          @input=${this._valueChangedOptions}
          helper-text="Index of the default tab (0-based) or Jinja template"
        ></ha-textfield>

        <h4>Global Styles</h4>
        <ha-textfield
          label="Primary Color"
          .value=${this._getStyleValue("--md-sys-color-primary")}
          .configValue=${"--md-sys-color-primary"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for active tab (--md-sys-color-primary)"
        ></ha-textfield>

        <ha-textfield
          label="Inactive Tab Color"
          .value=${this._getStyleValue("--md-sys-color-on-surface-variant")}
          .configValue=${"--md-sys-color-on-surface-variant"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for inactive tabs (--md-sys-color-on-surface-variant)"
        ></ha-textfield>

        <ha-textfield
          label="Icon Color"
          .value=${this._getStyleValue("--md-sys-color-on-surface")}
          .configValue=${"--md-sys-color-on-surface"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for icons (--md-sys-color-on-surface)"
        ></ha-textfield>

        <ha-textfield
          label="Font Size"
          .value=${this._getStyleValue(
            "--md-sys-typescale-label-large-font-size",
          )}
          .configValue=${"--md-sys-typescale-label-large-font-size"}
          @input=${this._valueChangedStyles}
          helper-text="Font size for tab labels (--md-sys-typescale-label-large-font-size)"
        ></ha-textfield>
      </div>
    `;
  }

  private _renderTabConfig(tab: TabConfig, index: number): TemplateResult {
    if (!tab) return html``;

    const attributes = tab.attributes || {};

    return html`
      <div class="tab-config">
        <h3>Tab ${index + 1} Configuration</h3>

        <h4>Tab Properties</h4>
        <ha-textfield
          label="Label"
          .value=${attributes.label || ""}
          .configValue=${"label"}
          @input=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          helper-text="Tab label text (supports Jinja templates)"
        ></ha-textfield>

        <ha-textfield
          label="Icon"
          .value=${attributes.icon || ""}
          .configValue=${"icon"}
          @input=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          helper-text="Material Design icon (e.g., mdi:home)"
        ></ha-textfield>

        <ha-formfield label="Stack Icon and Label">
          <ha-switch
            .checked=${attributes.stacked === true}
            .configValue=${"stacked"}
            @change=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Minimum Width">
          <ha-switch
            .checked=${attributes.minWidth === true}
            .configValue=${"minWidth"}
            @change=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          ></ha-switch>
        </ha-formfield>

        <h4>Dynamic Behavior</h4>
        <ha-textfield
          label="Hide Condition"
          .value=${attributes.hide !== undefined ? attributes.hide : ""}
          .configValue=${"hide"}
          @input=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          helper-text="Boolean or Jinja template that evaluates to true/false"
        ></ha-textfield>

        <ha-textfield
          label="Disable Condition"
          .value=${attributes.disable !== undefined ? attributes.disable : ""}
          .configValue=${"disable"}
          @input=${(e: Event) => this._valueChangedTabAttribute(e, index)}
          helper-text="Boolean or Jinja template that evaluates to true/false"
        ></ha-textfield>

        <h4>Card Configuration</h4>
        <div class="card-picker">
          <hui-card-picker
            .hass=${this.hass}
            .value=${tab.card?.type || ""}
            @value-changed=${(e: CustomEvent) =>
              this._cardTypeChanged(e, index)}
          ></hui-card-picker>

          ${tab.card?.type
            ? html`
                <div class="card-options">
                  ${this._renderCardEditor(tab.card, index)}
                </div>
              `
            : ""}
        </div>
      </div>
    `;
  }

  private _selectTab(index: number): void {
    this._selectedTabIndex = index;
  }

  private _addTab(): void {
    if (!this._config) return;

    const tabs = [...(this._config.tabs || [])];
    tabs.push({
      attributes: { label: `Tab ${tabs.length + 1}` },
      card: { type: "entities", entities: [] },
    });

    this._updateConfig({ ...this._config, tabs });
    this._selectedTabIndex = tabs.length - 1;
  }

  private _removeTab(index: number, e: Event): void {
    e.stopPropagation();
    if (!this._config || !this._config.tabs) return;

    const tabs = [...this._config.tabs];
    tabs.splice(index, 1);

    this._updateConfig({ ...this._config, tabs });
    if (this._selectedTabIndex >= tabs.length) {
      this._selectedTabIndex = Math.max(0, tabs.length - 1);
    }
  }

  private _getStyleValue(property: string): string {
    if (!this._config || !this._config.styles) return "";
    return (this._config.styles as any)[property] || "";
  }

  private _valueChangedOptions(e: Event): void {
    if (!this._config || !this.hass) return;

    const target = e.target as HTMLInputElement;
    const configValue = target.configValue as string;
    const value = target.value;

    const options = { ...(this._config.options || {}) };

    if (value === "") {
      delete options[configValue];
    } else {
      options[configValue] = value;
    }

    this._updateConfig({ ...this._config, options });
  }

  private _valueChangedStyles(e: Event): void {
    if (!this._config || !this.hass) return;

    const target = e.target as HTMLInputElement;
    const configValue = target.configValue as string;
    const value = target.value;

    const styles = { ...(this._config.styles || {}) };

    if (value === "") {
      delete styles[configValue];
    } else {
      styles[configValue] = value;
    }

    this._updateConfig({ ...this._config, styles });
  }

  private _valueChangedTabAttribute(e: Event, tabIndex: number): void {
    if (!this._config || !this.hass || !this._config.tabs) return;

    const target = e.target as HTMLInputElement;
    const configValue = target.configValue as string;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;

    const tabs = [...this._config.tabs];
    const tab = { ...tabs[tabIndex] };
    const attributes = { ...(tab.attributes || {}) };

    if (value === "" || value === false) {
      delete attributes[configValue];
    } else {
      attributes[configValue] = value;
    }

    tab.attributes = attributes;
    tabs[tabIndex] = tab;

    this._updateConfig({ ...this._config, tabs });
  }

  private _cardTypeChanged(e: CustomEvent, tabIndex: number): void {
    if (!this._config || !this.hass || !this._config.tabs) return;

    const cardType = e.detail.value;

    const tabs = [...this._config.tabs];
    const tab = { ...tabs[tabIndex] };

    // Preserve existing card configuration if possible
    const existingCard = tab.card || {};

    // Special handling for specific card types
    if (cardType === "markdown" && existingCard.type === "markdown") {
      // Preserve markdown content
      tab.card = {
        ...existingCard,
        type: cardType,
      };
    } else {
      // For other card types or type changes, create a default configuration
      // but try to preserve some common properties
      const newCard: any = { type: cardType };

      // Preserve entity if it exists and makes sense for the new card type
      if (
        existingCard.entity &&
        ["entity", "button", "gauge", "sensor"].includes(cardType)
      ) {
        newCard.entity = existingCard.entity;
      }

      // Preserve entities array if it exists and makes sense for the new card type
      if (
        existingCard.entities &&
        ["entities", "glance", "history-graph"].includes(cardType)
      ) {
        newCard.entities = existingCard.entities;
      }

      // Preserve title if it exists
      if (existingCard.title) {
        newCard.title = existingCard.title;
      }

      tab.card = newCard;
    }

    tabs[tabIndex] = tab;

    this._updateConfig({ ...this._config, tabs });
  }

  private _renderCardEditor(cardConfig: any, tabIndex: number): TemplateResult {
    if (!cardConfig || !cardConfig.type) {
      return html``;
    }

    // Special handling for markdown card
    if (cardConfig.type === "markdown") {
      return html`
        <div class="markdown-editor">
          <ha-textarea
            label="Markdown Content"
            .value=${cardConfig.content || ""}
            .configValue=${"content"}
            @input=${(e: Event) => this._markdownContentChanged(e, tabIndex)}
            rows="8"
          ></ha-textarea>
        </div>
      `;
    }

    // Default to standard card editor
    return html`
      <hui-card-editor
        .hass=${this.hass}
        .value=${cardConfig}
        .lovelace=${(window as any).lovelace}
        @config-changed=${(e: CustomEvent) =>
          this._cardConfigChanged(e, tabIndex)}
      ></hui-card-editor>
    `;
  }

  private _markdownContentChanged(e: Event, tabIndex: number): void {
    if (!this._config || !this.hass || !this._config.tabs) return;

    const target = e.target as HTMLTextAreaElement;
    const content = target.value;

    const tabs = [...this._config.tabs];
    const tab = { ...tabs[tabIndex] };
    const card = { ...tab.card };

    card.content = content;
    tab.card = card;
    tabs[tabIndex] = tab;

    this._updateConfig({ ...this._config, tabs });
  }

  private _cardConfigChanged(e: CustomEvent, tabIndex: number): void {
    if (!this._config || !this.hass || !this._config.tabs) return;

    const cardConfig = e.detail.config;

    const tabs = [...this._config.tabs];
    const tab = { ...tabs[tabIndex] };

    tab.card = cardConfig;
    tabs[tabIndex] = tab;

    this._updateConfig({ ...this._config, tabs });
  }

  private _updateConfig(config: TabbedCardConfig): void {
    this._config = config;
    fireEvent(this, "config-changed", { config });
  }

  static styles: CSSResultGroup = css`
    .card-config {
      width: 100%;
    }

    .tabs-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .tab {
      padding: 8px 16px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .tab.selected {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }

    .tab.add-tab {
      border-style: dashed;
      display: flex;
      align-items: center;
    }

    .tab-content {
      border: 1px solid var(--divider-color);
      padding: 16px;
      border-radius: 4px;
    }

    .global-config,
    .tab-config {
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 18px;
    }

    h4 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 16px;
    }

    ha-textfield {
      display: block;
      margin-bottom: 8px;
    }

    ha-formfield {
      display: block;
      margin-bottom: 8px;
    }

    .card-picker {
      margin-top: 8px;
    }

    .card-options {
      margin-top: 8px;
      border: 1px solid var(--divider-color);
      padding: 16px;
      border-radius: 4px;
    }

    .markdown-editor {
      width: 100%;
    }

    ha-textarea {
      width: 100%;
    }
  `;
}
