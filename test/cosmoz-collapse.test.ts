import '../src/cosmoz-collapse';
import { expect, html, fixture } from '@open-wc/testing';

describe('cosmoz-collapse', () => {
	it('renders opened', async () => {
		const el = await fixture(
			html`<cosmoz-collapse opened><p>Lore ipsum</p></cosmoz-collapse>`,
		);
		await expect(el).dom.to.equalSnapshot();
	});

	it('is hidden when not opened', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-collapse><p>Hidden content</p></cosmoz-collapse>`,
		);
		const style = getComputedStyle(el);
		expect(style.height).to.equal('0px');
	});

	it('is visible when opened attribute is set', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-collapse opened><p>Visible content</p></cosmoz-collapse>`,
		);
		const style = getComputedStyle(el);
		expect(style.display).to.not.equal('none');
	});

	it('has a shadow root with a slot', async () => {
		const el = await fixture<HTMLElement>(
			html`<cosmoz-collapse><p>Content</p></cosmoz-collapse>`,
		);
		expect(el.shadowRoot).to.not.equal(null);
		const slot = el.shadowRoot!.querySelector('slot');
		expect(slot).to.not.equal(null);
	});
});
