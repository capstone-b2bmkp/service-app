const config = {
  verbose: true,
  testTimeout: 30000,
  testMatch: ['**/tests/**/**/*.test.js'],
  roots: ['src'],
  collectCoverageFrom: [
    'src/**/*.js',
  ]
}

module.exports = config
