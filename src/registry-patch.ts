export function patchRegistry(customElements: any) {
  const originalDefine = customElements.define;
  customElements.define = function (tagName: any, ctor: any) {
    // Check if the element is already defined
    if (
      (tagName.startsWith("mwc-") || tagName.startsWith("md-")) &&
      customElements.get(tagName)
    ) {
      // Element is already registered, do not attempt to re-define
      console.debug(
        `[tabbed-card-programmable] Skipping registration of ${tagName} as it's already defined`,
      );
      return;
    }
    originalDefine.call(customElements, tagName, ctor);
  };
}

patchRegistry(customElements);
