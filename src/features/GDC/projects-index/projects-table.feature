Feature: Test Projects Index Page
    Test a few things with project index page

    Background:
        Given I open the page "ProjectsIndex"
	
    Scenario: Test if total number of files is above 0
        Then  I wait on element "@ProjectsIndex.table_total_files" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.table_total_files" is not empty
        Then  I expect that element "@ProjectsIndex.table_total_files" to be above "0"

    @Pending
    Scenario: Test if table can be downloaded in TSV
        Then  I wait on element "@ProjectsIndex.table_total_files" for 10000ms to be visible    
        Given the element "@ProjectsIndex.table_total_files" is visible
        When  I click on the button "@ProjectsIndex.table_button_json"
        Then  I expect that the downloaded file is of "JSON" format
        Then  I expect that element "['data']['projects']" from downloaded file contains at least "2" values
        Then  I expect that element "['data']['projects']['total']" from downloaded file to be above "3"

    @Pending
    Scenario: Test if table can be downloaded in TSV
        Then  I wait on element "@ProjectsIndex.table_total_files" for 10000ms to be visible    
        Given the element "@ProjectsIndex.table_total_files" is visible
        When  I click on the button "@ProjectsIndex.table_button_json"
        Then  I expect that the downloaded file is of "TSV" format
        Then  I expect that the downloaded file contains at least "2" linues

    	