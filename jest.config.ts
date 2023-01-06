const esModules: string[] = [
  'jest',
  'react-native',
  '@react-native',
];

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules.join('|')})`],
  cacheDirectory: './dist/jest/cache',
  coverageDirectory: './dist/jest/coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
};
