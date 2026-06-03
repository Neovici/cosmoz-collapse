import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src';

const Collapse = ({ opened }: { opened?: boolean }) => {
  return html`<cosmoz-collapse ?opened=${opened}
    ><p>Lorem Ipsum dolor sit amet</p></cosmoz-collapse
  >`;
};

const meta: Meta = {
  title: 'Collapse',
  render: Collapse,
  argTypes: { opened: { control: 'boolean' } },
  parameters: {
    docs: { description: { component: 'The Cosmoz Collapse web component' } },
  },
};

export default meta;

export const Basic: StoryObj = {
  args: { opened: true },
  parameters: { docs: { description: { story: 'The basic version' } } },
};

export const WithToggleButton: StoryObj = {
  render: () => {
    const toggle = (e: Event) => {
      const btn = e.target as HTMLElement;
      const collapse = btn.nextElementSibling as HTMLElement;
      collapse.toggleAttribute('opened');
    };
    return html`
      <button
        @click=${toggle}
        style="margin-bottom: 8px; padding: 8px 16px; cursor: pointer;"
      >
        Toggle Collapse
      </button>
      <cosmoz-collapse opened>
        <div style="padding: 16px; background: #f0f0f0; border-radius: 4px;">
          <h3 style="margin: 0 0 8px;">Collapsible Content</h3>
          <p style="margin: 0;">
            Click the button above to toggle this section open and closed. The
            content animates smoothly using the height transition.
          </p>
        </div>
      </cosmoz-collapse>
    `;
  },
  parameters: {
    docs: { description: { story: 'Interactive toggle with a button' } },
  },
};

export const MultipleCollapse: StoryObj = {
  render: () => {
    const toggle = (e: Event) => {
      const btn = e.target as HTMLElement;
      const collapse = btn.nextElementSibling as HTMLElement;
      collapse.toggleAttribute('opened');
    };
    return html`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div>
          <button
            @click=${toggle}
            style="width: 100%; padding: 10px; text-align: left; cursor: pointer; background: #e0e0e0; border: 1px solid #ccc; border-radius: 4px;"
          >
            Section 1
          </button>
          <cosmoz-collapse opened>
            <div
              style="padding: 16px; background: #f9f9f9; border: 1px solid #eee; border-top: none;"
            >
              <p style="margin: 0;">
                Content for section 1. This section starts opened.
              </p>
            </div>
          </cosmoz-collapse>
        </div>
        <div>
          <button
            @click=${toggle}
            style="width: 100%; padding: 10px; text-align: left; cursor: pointer; background: #e0e0e0; border: 1px solid #ccc; border-radius: 4px;"
          >
            Section 2
          </button>
          <cosmoz-collapse>
            <div
              style="padding: 16px; background: #f9f9f9; border: 1px solid #eee; border-top: none;"
            >
              <p style="margin: 0;">
                Content for section 2. This section starts closed.
              </p>
            </div>
          </cosmoz-collapse>
        </div>
        <div>
          <button
            @click=${toggle}
            style="width: 100%; padding: 10px; text-align: left; cursor: pointer; background: #e0e0e0; border: 1px solid #ccc; border-radius: 4px;"
          >
            Section 3
          </button>
          <cosmoz-collapse>
            <div
              style="padding: 16px; background: #f9f9f9; border: 1px solid #eee; border-top: none;"
            >
              <p style="margin: 0;">
                Content for section 3. Also starts closed. Each section operates
                independently.
              </p>
            </div>
          </cosmoz-collapse>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion-style usage with multiple collapsible sections',
      },
    },
  },
};

export const RichContent: StoryObj = {
  render: () => {
    const toggle = (e: Event) => {
      const btn = e.target as HTMLElement;
      const collapse = btn.nextElementSibling as HTMLElement;
      collapse.toggleAttribute('opened');
    };
    return html`
      <button @click=${toggle} style="padding: 8px 16px; cursor: pointer;">
        Show/Hide Details
      </button>
      <cosmoz-collapse opened>
        <div
          style="padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; margin-top: 8px;"
        >
          <h2 style="margin: 0 0 12px;">Rich Content Example</h2>
          <p>This collapse can contain any HTML content including:</p>
          <ul>
            <li>Lists</li>
            <li>Images</li>
            <li>Forms</li>
            <li>Other components</li>
          </ul>
          <input
            type="text"
            placeholder="Even form inputs..."
            style="padding: 8px; border-radius: 4px; border: none; width: 200px;"
          />
        </div>
      </cosmoz-collapse>
    `;
  },
  parameters: {
    docs: { description: { story: 'Collapse with rich HTML content inside' } },
  },
};
