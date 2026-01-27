import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	...cfg,
	{
		ignores: ['coverage/', 'dist/', '__snapshots__/', 'storybook-static/'],
	},
];
