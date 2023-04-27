const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  transform: {
    ...tsJestConfig.transform,
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: './tsconfig.json',
    },
  },
  cacheDirectory: './dist/jest/cache',
  coverageDirectory: './dist/jest/coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
};
