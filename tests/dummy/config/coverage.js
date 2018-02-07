/* eslint-env node */

module.exports = {
  coverageEnvVar: 'COVERAGE',
  coverageFolder: 'coverage',
  excludes: [
    '*/app/**/*',
    '*/tests/**/*'
  ],
  useBabelInstrumenter: true,
  reporters: [
    'html',
    'json-summary',
    'lcov',
    'text-summary'
  ]
}
