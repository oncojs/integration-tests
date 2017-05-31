const config = require('./wdio.conf.js').config;

config.capabilities = [{
    browserName: 'firefox',
}];

config.maxInstances = 5;

config.services = ['selenium-standalone'];

exports.config = config;
