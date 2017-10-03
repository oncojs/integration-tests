const config = require('./wdio.conf.js').config;

config.maxInstances = 5;

config.services = ['selenium-standalone'];

exports.config = config;
