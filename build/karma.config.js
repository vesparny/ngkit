'use strict';

var baseDir = 'client',
    buildDir = 'build';

module.exports = {

  //This is the list of file patterns to load into the browser during testing.
  files: [
    baseDir + '/src/vendor/angular/angular.js',
    baseDir + '/src/vendor/angular-mocks/angular-mocks.js',
    baseDir + '/src/vendor/angular-ui-router/release/angular-ui-router.js',
    baseDir + '/test/unit/**/*.spec.js',
    buildDir + '/tmp/app/**/*.js',
    buildDir + '/tmp/common/**/*.js',
    buildDir + '/tmp/templates.js'
  ],

  //used framework
  frameworks: ['jasmine'],

  plugins: [
    'karma-chrome-launcher',
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-coverage',
    'karma-html-reporter',
    'karma-mocha-reporter'
  ],

  preprocessors: {
    '**/client/src/**/*.js': 'coverage'
  },

  reporters: ['mocha', 'html', 'coverage'],

  coverageReporter: {
    type: 'html',
    dir: baseDir + '/test/unit-results/coverage',
    file: 'coverage.html'
  },

  htmlReporter: {
    outputDir: baseDir + '//test/unit-results/html'
  },

  logLevel: 'info',

  urlRoot: '/__test/',

  //used browsers (overriding in some gulp task)
  browsers: ['PhantomJS']
};
