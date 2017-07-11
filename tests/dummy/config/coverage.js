/* eslint-env node */

module.exports = {
  coverageEnvVar: 'COVERAGE',
  coverageFolder: 'coverage',
  useBabelInstrumenter: true,
  excludes: [
    '*/app/**/*',
    '*/tests/**/*'
  ]
}
