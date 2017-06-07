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

    @Pending
    Scenario: Test if Project facet is displayed and usable
        Then  I wait on element "@ProjectsIndex.facet_project_search" for 10000ms to be visible    
        Given the element "@ProjectsIndex.facet_project_search" is visible
        When  I set "Adenocarcinoma" to the inputfield "@ProjectsIndex.facet_project_search"
        Then  I wait on element "@ProjectsIndex.facet_project_search_results" for 3000ms to be visible
        Then  I expect that element "@ProjectsIndex.facet_project_search_results" contains at least 2 "@ProjectsIndex.facet_project_search_result"

