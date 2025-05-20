/**
 * Patches the CustomElementRegistry to prevent duplicate registration errors
 * for Material Web Components that might already be registered by Home Assistant
 */
export function patchRegistry(customElements: any) {
  // Only patch if not already patched
  if ((customElements as any).__tabbedCardPatched) {
    return;
  }

  const originalDefine = customElements.define;
  customElements.define = function (tagName: any, ctor: any) {
    // Check if the element is already defined
    if (customElements.get(tagName)) {
      // Element is already registered, do not attempt to re-define
      console.debug(
        `[tabbed-card-programmable] Skipping registration of ${tagName} as it's already defined`,
      );
      return;
    }

    try {
      originalDefine.call(customElements, tagName, ctor);
    } catch (error) {
      console.warn(
        `[tabbed-card-programmable] Failed to register ${tagName}:`,
        error,
      );
      // If registration fails, we can still use the element if it's already defined
    }
  };

  // Mark as patched to avoid double patching
  (customElements as any).__tabbedCardPatched = true;
}

// Apply the patch
patchRegistry(customElements);
