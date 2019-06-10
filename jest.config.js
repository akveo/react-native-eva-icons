const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  preset: 'react-native',
  transform: {
    ...tsJestConfig.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: './tsconfig.test.json',
    },
  },
  cacheDirectory: './dist/jest/cache',
  coverageDirectory: './dist/jest/coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
};
