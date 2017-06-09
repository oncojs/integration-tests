class HomePage {
  constructor() {
    this.title = 'Home';
    this.url = '/';
  }

  get selectors() {
    return {
      search_box: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > input',
      search_results: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > ul',
      summary_project_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span > span',
      summary_primary_sites_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span > span',
      summary_cases_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span > span',
      summary_files_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span > span',
      summary_genes_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span > span',
      summary_mutations_count: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-12d3q5d > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span > span',
    };
  }

}
module.exports = new HomePage();