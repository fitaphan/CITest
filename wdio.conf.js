exports.config = {
    exclude: [],
    specs: [
        './test/**/*.js'
    ],
    host: '127.0.0.1',
    port: 4444,
    services: ['selenium-standalone'],
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 900000,
    },
    reporters: ['junit'],
    reporterOptions: {
        junit: {
            outputDir: 'reports'
        }
    }
};
