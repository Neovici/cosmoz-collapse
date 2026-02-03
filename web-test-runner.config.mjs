import cfg from '@neovici/cfg/web/test-runner.mjs';
export default {
	...cfg,
	files: 'test/**/*.test.(j|t)s',
	testFramework: { config: { ui: 'bdd' } },
	coverageConfig: {
		...cfg.coverageConfig,
		reportDir: 'coverage',
		threshold: { statements: 65, branches: 65, functions: 50, lines: 65 },
	},
};
