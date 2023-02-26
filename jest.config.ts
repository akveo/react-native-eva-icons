export default {
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: './dist/jest/coverage',
};
