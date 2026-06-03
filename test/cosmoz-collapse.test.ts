import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-collapse';

describe('cosmoz-collapse', () => {
  it('renders opened', async () => {
    const el = await fixture<HTMLElement>(
      html`<cosmoz-collapse opened><p>Lore ipsum</p></cosmoz-collapse>`,
    );
    await expect(el).dom.to.equalSnapshot();
  });

  it('toggles closed', async () => {
    const el = await fixture<HTMLElement>(
      html`<cosmoz-collapse opened><p>Content</p></cosmoz-collapse>`,
    );
    el.removeAttribute('opened');
    await aTimeout(300);
    expect(el.style.display).to.equal('none');
  });

  it('toggles open', async () => {
    const el = await fixture<HTMLElement>(
      html`<cosmoz-collapse><p>Content</p></cosmoz-collapse>`,
    );
    el.setAttribute('opened', '');
    await aTimeout(300);
    expect(el.style.display).to.equal('');
  });
});
