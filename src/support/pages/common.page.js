class CommonPage {
    constructor() {
        this.title = 'Any Page';
    }

    get selectors () {
      return {
        privacy_warning: 'body > div.ReactModalPortal > div > div',
        accept_privacy_warning_button: 'body > div.ReactModalPortal > div > div > div > div:nth-child(3) > button'
      };
    }
}
module.exports = new CommonPage();