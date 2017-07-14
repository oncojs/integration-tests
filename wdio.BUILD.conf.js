const config = require('./wdio.conf.js').config;

config.capabilities = [{
    browserName: 'chrome',
    chromeOptions: {
    args: ['--headless', '--disable-gpu']
    }
}];

config.maxInstances = 1;

config.services = ['selenium-standalone'];

exports.config = config;
