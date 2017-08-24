class ProjectsIndexPage {
  constructor() {
    this.title = 'Projects Index';
    this.url = '/projects';
  }
  
  get selectors() {
    return {
    	graph_topmutatedgenes_svg: '.test-projects-charts .test-stacked-bar-chart svg'
    	, graph_topmutatedgenes_cases: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(1) > div:nth-child(2) > a'
    	, graph_casedistribution_svg: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(2) > span > div > svg'
    	, graph_casedistribution_cases: '#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(2) > div:nth-child(2)'
    	, tab_table: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)'
    	, tab_graph: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)'
    	, table: '#projects-table'
        , projects_table: '#projects-table'
        , projects_count: '#skip > div > div.css-rk9c3n > span > div.test-tabbed-links > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > b'
    	, table_total_files: '#projects-table > tbody > tr:nth-child(40) > td:nth-child(13) > a'
    	, table_button_json: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(3) > button'
    	, table_button_tsv: '#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > span:nth-child(4) > button'
    	, graph_githut_svg: '#pc > svg'
    	, facet_project: '#skip > div > div.css-drkel2 > div > div:nth-child(2) > div > div.css-1f1n0hh'
    	, facet_project_search: '#project_id'
		, facet_project_search_result_list: '#project_id-options'
		, facet_project_search_result_item: '#project_id-options > div'
		, first_facet_project_search_result: '#project_id-options > div:nth-child(1)'
		, facet_primarysite: '#skip > div > div.css-drkel2 > div > div:nth-child(2) > div > div:nth-child(3)'
		, facet_primarysite_kidney: '[for="input-Primary Site-Kidney"]'
		, query: '#skip > div > div.css-rk9c3n > div > div'
    };
  }
}
module.exports = new ProjectsIndexPage();