/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
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

  app.import('bower_components/sinonjs/sinon.js')

  return app.toTree()
}
