module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    baseURL: '/',
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
    ENV.baseURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    ENV.baseURL = '/frost-modal'
    ENV.isDemo = true
  }

  return ENV
}
