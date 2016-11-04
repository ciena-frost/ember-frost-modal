module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {},
      iconPacks: {
        inline: true
      }
    },
    APP: {}
  }

  if (environment === 'development') {}

  // BEGIN-SNIPPET config-no-animation
  if (environment === 'test') {
    ENV['frost-modal'] = {
      'no-animation': true
    }
  }
  // END-SNIPPET

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    ENV.rootURL = '/ember-frost-modal'
    ENV.isDemo = true
  }

  return ENV
}
