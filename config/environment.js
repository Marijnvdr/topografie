/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'topografie',
    podModulePrefix: 'topografie/pods',
    environment: environment,
    baseURL: '/',
    // apiHost: 'http://localhost:57116',
    apiHost: 'http://topogame.azurewebsites.net',
    apiNamespace : 'api',
    locationType: 'auto',
    contentSecurityPolicy: {
       'connect-src': "'self' 'unsafe-inline' http://localhost:57116 http://topogame.azurewebsites.net",
       'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com https://*.google.com http://www.gstatic.com",
       'img-src': "'self' https://*.googleapis.com https://*.gstatic.com https://*.google.com",
       'font-src': "'self' https://*.gstatic.com https://*.google.com",
       'style-src': "'self' 'unsafe-inline' https://*.googleapis.com https://*.google.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
