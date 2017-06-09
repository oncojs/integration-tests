class CommonPage {
    constructor() {
        this.title = 'Common Pages';
    }

    get selectors () {
      return {
        privacy_warning: 'body > div.ReactModalPortal > div > div',
        accept_privacy_warning_button: 'body > div.ReactModalPortal > div > div > div > div:nth-child(3) > button',
        load_indicator: '#root > div > div.css-co82fs > div',
      };
    }
}
module.exports = new CommonPage();