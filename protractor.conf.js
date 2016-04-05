exports.config = {
    baseUrl: 'http://localhost:3000/',

    // use `npm run e2e`
    specs: [
        'app/**/*.e2e.js'
    ],
    exclude: [],

    //framework: 'jasmine',

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'test/e2e/features/steps/*.steps.js'
        ],
        format: 'pretty'
    },

    specs: [
        'test/e2e/features/search.feature'
    ],

    allScriptsTimeout: 110000,

    /*
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },*/


    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },



    onPrepare: function() {
        browser.ignoreSynchronization = true;
    },

    seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
};
