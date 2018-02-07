/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    snippetSearchPaths: [
      'addon',
      'tests/dummy'
    ]
  })

  return app.toTree()
}
