import { toggleSize } from './toggle';

const reset = (el: HTMLElement, visible?: boolean) => {
	Object.assign(el.style, { display: visible ? '' : 'none' });
};

class Collapse extends HTMLElement {
	static get observedAttributes() {
		return ['opened'];
	}

	toggle = toggleSize('height');

	constructor() {
		super();
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(document.createElement('slot'));
		shadow.adoptedStyleSheets = [sheet];
	}

	connectedCallback() {
		reset(this, this.getAttribute('opened') != null);
	}

	attributeChangedCallback(name: string, prev?: unknown, value?: unknown) {
		switch (name) {
			case 'opened': {
				const visible = value != null;
				return this.isConnected
					? this.toggle(this, visible)
					: reset(this, visible);
			}
		}
	}
}

export { Collapse };
customElements.define('cosmoz-collapse', Collapse);
