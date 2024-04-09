import '../src/cosmoz-collapse';
import { expect, html, fixture } from '@open-wc/testing';

describe('cosmoz-collapse', () => {
	it('renders opened', async () => {
		const el = await fixture(
			html`<cosmoz-collapse opened><p>Lore ipsum</p></cosmoz-collapse>`,
		);
		await expect(el).dom.to.equalSnapshot();
	});
});
