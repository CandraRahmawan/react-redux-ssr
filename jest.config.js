module.exports = {
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js}'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 35,
      functions: 60,
      lines: 40,
      statements: 40
    }
  },
  coverageDirectory: '__coverage__',
  setupFiles: ['<rootDir>/test/index.js'],
  transform: {
    '\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
