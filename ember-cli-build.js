/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    'ember-cli-mocha': {
      useLintTree: false
    },
    snippetSearchPaths: [
      'addon',
      'tests/dummy'
    ]
  })

  return app.toTree()
}
