module.exports = {
  extends: 'frost-standard',
  globals: {
    capture: false
  },
  rules: {
    'ember-standard/prop-types': 2,
    'mocha/valid-test-description': 0,
    'no-multi-spaces': [
      'error',
      {ignoreEOLComments: true}
    ]
  }
}
