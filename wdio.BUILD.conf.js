const config = require('./wdio.conf.js').config;

config.reporters = ['allure', 'dot', 'spec', 'json'];
config.reporterOptions = {
    outputDir: './wdio-logs/',
    allure: {
        outputDir: './allure-reports/allure/'
    }
};

config.services = ['selenium-standalone'];

exports.config = config;
