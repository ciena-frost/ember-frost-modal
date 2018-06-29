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
    ],
    svgstore: {
      files: [
        {
          sourceDirs: 'tests/dummy/frost-icon-svgs',
          outputFile: '/assets/icon-packs/dummy.svg'
        },
        {
          sourceDirs: 'frost-icon-svgs',
          outputFile: '/assets/icon-packs/modal.svg'
        }
      ],
      svgstoreOpts: {
        copyAttrs: ['preserveAspectRatio']
      }
    }
  })

  return app.toTree()
}
