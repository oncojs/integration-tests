class HomePage {
  constructor() {
    this.title = 'Home';
    this.url = '/';
  }

  get selectors() {
    return {
      search_box: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > input',
      search_results: '#skip > div > div.css-1w3mo3h > div:nth-child(1) > div.css-13azwyo > ul',
      summary_project_count: '.test-projects-count',
      summary_primary_sites_count: '.test-primary-sites-count',
      summary_cases_count: '.test-cases-count',
      summary_files_count: '.test-files-count:not(.test-mutations-count)',
      summary_genes_count: '.test-genes-count',
      summary_mutations_count: '.test-mutations-count',
    };
  }

}
module.exports = new HomePage();