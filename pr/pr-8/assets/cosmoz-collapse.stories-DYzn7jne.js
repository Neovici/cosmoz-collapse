import{b as a}from"./iframe-B60gf8hB.js";let n=class extends HTMLElement{constructor(){super();const s=new CSSStyleSheet;s.replaceSync(`
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
		`);const t=this.attachShadow({mode:"open"});t.appendChild(document.createElement("slot")),t.adoptedStyleSheets=[s]}};customElements.define("cosmoz-collapse",n);const r=({opened:o})=>a`<cosmoz-collapse ?opened=${o}
        ><p>Lorem Ipsum dolor sit amet</p></cosmoz-collapse
    >`,c={title:"Collapse",render:r,argTypes:{opened:{control:"boolean"}},parameters:{docs:{description:{component:"The Cosmoz Collapse web component"}}}},e={args:{opened:!0},parameters:{docs:{description:{story:"The basic version"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The basic version'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const d=["Basic"];export{e as Basic,d as __namedExportsOrder,c as default};
