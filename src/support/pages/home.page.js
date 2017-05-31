class HomePage {
  constructor() {
    this.title = 'Home Page';
    this.url = '/';
  }

  get selectors() {
    return {
      search_box: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > input',
      search_results: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > ul',
    };
  }

}
module.exports = new HomePage();