class ProjectsIndexPage {
  constructor() {
    this.title = 'Projects Index';
    this.url = '/projects';
  }
  
  get selectors() {
    return {
    	graph_topmutatedgenes_svg: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(1) > span > div > svg'
    	, graph_topmutatedgenes_cases: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(1) > div:nth-child(2) > a'
    	, graph_casedistribution_svg: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(2) > span > div > svg'
    	, graph_casedistribution_cases: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(2) > div:nth-child(2)'
    	, tab_table: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)'
    	, tab_graph: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'
    	, table_total_files: '#projects-table > tbody > tr:nth-child(40) > td:nth-child(13) > a'
    	, graph_githut_svg: '#pc > svg'
    };
  }

}
module.exports = new ProjectsIndexPage();