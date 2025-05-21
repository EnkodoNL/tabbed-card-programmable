import {
  LovelaceCard,
  LovelaceCardConfig,
  LovelaceCardEditor,
} from "custom-card-helpers";

declare global {
  interface HTMLElementTagNameMap {
    "tabbed-card-editor": LovelaceCardEditor;
    "hui-error-card": LovelaceCard;
  }

  interface HTMLInputElement {
    configValue?: string;
  }
}

export interface TabbedCardConfig extends LovelaceCardConfig {
  type: string;
  options?: {
    defaultTabIndex?: string | number | undefined;
    [key: string]: any;
  };
  styles?: {
    [key: string]: string;
  };
  attributes?: {
    [key: string]: any;
  };
  tabs: TabConfig[];
}

export interface TabConfig {
  styles?: {
    [key: string]: string;
  };
  attributes?: {
    label?: string;
    icon?: string;
    stacked?: boolean;
    hide?: boolean | string;
    disable?: boolean | string;
    [key: string]: any;
  };
  card: LovelaceCardConfig;
  processedLabel?: string;
}
