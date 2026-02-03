class Collapse extends HTMLElement {
	constructor() {
		super();
		const sheet = new CSSStyleSheet();
		sheet.replaceSync(`
			:host {
				display: block;
				overflow: hidden;
				interpolate-size: allow-keywords;
				height: 0;
				display: none;
				transition:
					height 250ms ease,
					display 250ms ease allow-discrete;
			}
			:host([opened]) {
				height: auto;
				display: block;
			}
			@starting-style {
				:host([opened]) {
					height: 0;
				}
			}
		`);
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(document.createElement('slot'));
		shadow.adoptedStyleSheets = [sheet];
	}
}

export { Collapse };
customElements.define('cosmoz-collapse', Collapse);
