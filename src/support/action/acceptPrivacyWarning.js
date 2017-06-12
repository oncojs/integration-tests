var setCookie = require('./setCookie');
module.exports = (done) => {
    setCookie('NCI-Warning', 'true', done);
    if (browser.isExisting('@Common.privacy_warning')) {
        browser.click('@Common.accept_privacy_warning_button');
    }
};
