Feature: Test Projects Index Page
    Test a few things with project index page

    Background:
        Given I open the page "ProjectsIndex"
 
    Scenario: Test if total number of files is greater than 0
        Then  I wait on element "@ProjectsIndex.table_total_files" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.table_total_files" is not empty
        Then  I expect that element "@ProjectsIndex.table_total_files" not contains the exact text "274,724"

