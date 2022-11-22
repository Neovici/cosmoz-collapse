import { toggleSize } from "./toggle";

class Collapse extends HTMLElement {
  static get observedAttributes() {
    return ["opened"];
  }

  toggle = toggleSize("height");

  constructor() {
    super();
    Object.assign(this.style, { display: "none", overflow: "hidden" });
  }

  attributeChangedCallback(name: string, prevValue?: unknown, value?: unknown) {
    switch (name) {
      case "opened": {
        const visible = value != null;
        return this.isConnected
          ? this.toggle(this, visible)
          : Object.assign(this.style, { display: visible ? "" : "none" });
      }
    }
  }
}

export { Collapse };
customElements.define("cosmoz-collapse", Collapse);
