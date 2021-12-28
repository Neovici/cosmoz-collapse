import { toggle } from './toggle';

class Collapse extends HTMLElement {
	static get observedAttributes() {
		return ['opened'];
	}
	constructor() {
		super();
		Object.assign(this.style, { display: 'none', overflow: 'hidden' });
	}
	attributeChangedCallback(name, prevValue, value) {
		switch (name) {
		case 'opened': {
			const visible = value != null;
			return this.isConnected
				? toggle(this, visible)
				: Object.assign(this.style, { display: visible ? '' : 'none' });
		}
		}
	}
}
customElements.define('cosmoz-collapse', Collapse);
