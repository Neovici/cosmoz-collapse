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
	argTypes: {
		opened: {
			control: 'boolean',
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'The Cosmoz Collapse web component',
			},
		},
	},
};

export default meta;

export const Basic: StoryObj = {
	args: {
		opened: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};
