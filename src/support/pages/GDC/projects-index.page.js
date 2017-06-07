class ProjectsIndexPage {
  constructor() {
    this.title = 'Projects Index';
    this.url = '/projects';
  }
  
  get selectors() {
    return {
    	table_total_files: '#projects-table > tbody > tr:nth-child(40) > td:nth-child(13) > a',
    };
  }

}
module.exports = new ProjectsIndexPage();