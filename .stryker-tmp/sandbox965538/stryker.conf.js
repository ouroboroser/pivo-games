module.exports = {
  mutate: ['src/**/*.tsx'],
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.js',
    enableFindRelatedTests: false,
  },
  packageManager: 'yarn',
  tsconfigFile: 'tsconfig.json'
};
