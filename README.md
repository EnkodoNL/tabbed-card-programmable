# Tabbed Card Programmable

#### based on kinghat's [Tabbed Card](https://github.com/kinghat/tabbed-card)

A custom card for home assistant that utilizes tabs to segregate individual cards.

#### Changes from kinghat's version:

As the original dev kinghat did not respond to my pull request (https://github.com/kinghat/tabbed-card/pull/105) for a long time, I decided to fork and publish this as a separate card.

- Added support for conditional default index of tabs like this:
- Added support for hiding and disabling tabs using the `hide` and `disable` attributes. Both attributes support boolean values or Jinja templates that evaluate to boolean values.

![Tabbed Card](assets/tabbed-card.png)

## Installation

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

Use [HACS](https://hacs.xyz) or follow this [guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)

## Card Schema

```yaml
type: custom:tabbed-card-programmable
options?:
  defaultTabIndex?: number | string
styles?:
attributes?:
  label?: string
  icon?: string
  isFadingIndicator?: boolean
  minWidth?: boolean
  isMinWidthIndicator?: boolean
  stacked?: boolean
  hide?: boolean | string # New property
  disable?: boolean | string # New property
tabs:
  - card:
      type:
    styles?:
    attributes?:
      label?: string
      icon?: string
      isFadingIndicator?: boolean
      minWidth?: boolean
      isMinWidthIndicator?: boolean
      stacked?: boolean
```

### Example

```yaml
- type: custom:tabbed-card-programmable
  tabs:
    - card:
        type: button
        entity: light.bed_light
        tap_action:
          action: toggle
        show_name: true
        show_icon: true
        show_state: true
      attributes:
        label: Button
    - card:
        type: entities
        title: Air Quality
        entities:
          - air_quality.demo_air_quality_home
          - air_quality.demo_air_quality_office
      attributes:
        label: Air Quality
    - card:
        type: entities
        title: Binary sensor
        entities:
          - binary_sensor.basement_floor_wet
          - binary_sensor.movement_backyard
      attributes:
        label: Binary Sensor
    - card:
        type: entities
        title: Calendar
        entities:
          - entity: calendar.calendar_1
            name: "1"
          - entity: calendar.calendar_2
            name: "2"
      attributes:
        label: Calendar
```

## Configuration

You can apply global and per tab configuration to your card. Global configuration(top level properties) are expressed on all tabs in your card. You can also set local configuration, per tab styles and attributes that take precedence over any corresponding global configuration.

### **Options**

| Property          | Default | Description                                               |
| ----------------- | ------- | --------------------------------------------------------- |
| `defaultTabIndex` | `0`     | tab to display on first render (0 based, jinja supported) |

```yaml
type: custom:tabbed-card-programmable
options:
  defaultTabIndex: 1 # in a 0 based index, the second tab would be the active tab on render
tabs: ...
```

### **Styling**

This card tries to closely match home assistants default tab styles. You can override and apply additional styling to the card via provided material web components custom properties.

Default Custom Properties:

| Name                                 | Default                    | Description                                                                                                                                                    |
| ------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--mdc-theme-primary`                | `--primary-text-color`     | Color of the activated tab's text, indicator, and ripple.                                                                                                      |
| `--mdc-tab-text-label-color-default` | `rgba(225, 225, 225, 0.8)` | Color of an unactivated tab label. **_If you want transpareny on the unactivated tabs, you need to use an `rgba` value incorporating the 4th alpha channel._** |
| `--mdc-typography-button-font-size`  | `14px`                     | Font size of the tab label.                                                                                                                                    |

```yaml
type: custom:tabbed-card-programmable
styles: # global styles applied to all tabs
  --mdc-theme-primary: yellow
  --mdc-tab-text-label-color-default: orange
tabs: ...
```

![Styling](assets/global-styles.png)

See the full list of exposed custom properties: [`<mwc-tab>`](https://github.com/material-components/material-web/blob/mwc/packages/tab/README.md#css-custom-properties)

### **Attributes**

| Name                  | Default | Description                                                     |
| --------------------- | ------- | --------------------------------------------------------------- |
| `label`               | `""`    | Text label to display in tab.                                   |
| `icon`                | `""`    | Home Assistant `mdi:icon` name.                                 |
| `isFadingIndicator`   | `false` | Indicator fades in and out instead of sliding.                  |
| `minWidth`            | `false` | Shrinks tab as narrow as possible without causing text to wrap. |
| `isMinWidthIndicator` | `false` | Shrinks indicator to be the size of the content.                |
| `stacked`             | `false` | Stacks icon on top of label text.                               |
| `hide`                | `false` | Completely removes the tab from the tab bar.                    |
| `disable`             | `false` | Shows the tab but makes it non-clickable (grayed out).          |

Global attributes:

```yaml
type: custom:tabbed-card-programmable
styles:
  ...
attributes:
  icon: mdi:fire # global attribute applied to all tabs
tabs:
  - attributes:
      label: Button
    card:
      type: button
      entity: light.bed_light
      tap_action:
        action: toggle
      show_name: true
      show_icon: true
      show_state: true
  ...
```

![Global Attributes](assets/global-attributes.png)

Local attributes:

```yaml
type: custom:tabbed-card-programmable
styles: ...
tabs:
  - attributes:
      label: Button # local attributes that apply only to individual tabs
      icon: mdi:play
    card:
      type: button
      entity: light.bed_light
      tap_action:
        action: toggle
      show_name: true
      show_icon: true
      show_state: true
  - attributes:
      label: Sensors
      icon: mdi:pause
    card:
      type: entities
      title: Sensor
      entities:
        - sensor.carbon_dioxide
        - sensor.carbon_monoxide
        - sensor.outside_humidity
        - sensor.outside_temperature
        - sensor.power_consumption
        - sensor.today_energy
  - attributes:
      label: Air Quality
      icon: mdi:stop
    card:
      type: entities
      title: Air Quality
      entities:
        - air_quality.demo_air_quality_home
        - air_quality.demo_air_quality_office
```

![Local Attributes](assets/local-attributes.png)

## Hide and Disable Tabs

You can hide or disable tabs using the `hide` and `disable` attributes. Both attributes support boolean values or Jinja templates that evaluate to boolean values.

### Using boolean values:

```yaml
type: custom:tabbed-card-programmable
tabs:
  - attributes:
      label: Always Visible
    card:
      type: entities
      entities:
        - light.living_room
  - attributes:
      label: Hidden Tab
      hide: true
    card:
      type: entities
      entities:
        - light.bedroom
  - attributes:
      label: Disabled Tab
      disable: true
    card:
      type: entities
      entities:
        - light.kitchen
```

### Using Jinja templates:

```yaml
type: custom:tabbed-card-programmable
tabs:
  - attributes:
      label: Always Visible
    card:
      type: entities
      entities:
        - light.living_room
  - attributes:
      label: Hidden at Night
      hide: "{% if now().hour < 6 or now().hour >= 22 %}true{% else %}false{% endif %}"
    card:
      type: entities
      entities:
        - light.bedroom
  - attributes:
      label: Disabled when Off
      disable: "{% if is_state('light.kitchen', 'off') %}true{% else %}false{% endif %}"
    card:
      type: entities
      entities:
        - light.kitchen
```

## Appreciation

Thanks to kinghat for the original [Tabbed Card](https://github.com/kinghat/tabbed-card)
