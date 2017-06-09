@ProjectsFacets
Feature: Projects list page facets
    Test if facets on the projects list page are properly displayed

    Background:
        Given I open the page "ProjectsIndex"
 
    Scenario: Test if Project facet is displayed and usable
        Then  I wait on element "@ProjectsIndex.facet_project_search" for 10000ms to be visible    
        Given the element "@ProjectsIndex.facet_project_search" is visible
        When  I set "Adenocarcinoma" to the inputfield "@ProjectsIndex.facet_project_search"
        Then  I wait on element "@ProjectsIndex.facet_project_search_results_1" for 3000ms to be visible
        Then  I expect that element "@ProjectsIndex.facet_project_search_results" contains the text "TCGA"
        Then  I expect that element "@ProjectsIndex.facet_project_search_results" contains the text "Colorectal"

    Scenario: Test Primary Site facet
        Then  I wait on element "@ProjectsIndex.facet_primarysite_1" for 10000ms to be visible    
        When  I click on the button "@ProjectsIndex.facet_primarysite_1"
        Then  I expect that element "@ProjectsIndex.query" contains the text "Kidney"
        Then  I expect that element "@ProjectsIndex.query" contains the text "Primary Site"
        Then  I expect that element "@ProjectsIndex.table" contains the text "Kidney"

    Scenario: Test any facet
        Then  I wait on element "@ProjectsIndex.facet_primarysite_1" for 10000ms to be visible    
        Then  I save the value of "@ProjectsIndex.facet_primarysite_1" as "$tmp_value"
        When  I click on the button "@ProjectsIndex.facet_primarysite_1"
        Then  I expect that element "@ProjectsIndex.query" contains the text "$tmp_value"
        Then  I expect that element "@ProjectsIndex.table" contains the text "$tmp_value"

    @Pending
    Scenario: Test if Project facet is displayed and usable
        Then  I wait on element "@ProjectsIndex.facet_project_search" for 10000ms to be visible    
        Given the element "@ProjectsIndex.facet_project_search" is visible
        When  I set "Adenocarcinoma" to the inputfield "@ProjectsIndex.facet_project_search"
        Then  I wait on element "@ProjectsIndex.facet_project_search_results" for 3000ms to be visible
        Then  I expect that element "@ProjectsIndex.facet_project_search_results" contains at least 2 "@ProjectsIndex.facet_project_search_result"

