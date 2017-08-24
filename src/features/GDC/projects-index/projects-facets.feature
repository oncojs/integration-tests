@ProjectsFacets
Feature: Projects list page facets
    Test if facets on the projects list page are properly displayed

    Background:
        Given I open the page "ProjectsIndex"
        And   I accept the privacy warning
 
    Scenario: Test if Project facet is displayed and usable
        Then  I wait on element "@ProjectsIndex.facet_project_search" for 10000ms to be visible    
        Given the element "@ProjectsIndex.facet_project_search" is visible
        When  I set "Adenocarcinoma" to the inputfield "@ProjectsIndex.facet_project_search"
        Then  I wait on element "@ProjectsIndex.first_facet_project_search_result" to be visible
        Then  I pause for 1000ms
        Then  I expect that element "@ProjectsIndex.facet_project_search_result_list" contains the text "TCGA"
        Then  I expect that element "@ProjectsIndex.facet_project_search_result_list" contains the text "Colorectal"

    Scenario: Test Primary Site facet
        Then  I wait on element "@ProjectsIndex.facet_primarysite_kidney" for 10000ms to be visible    
        When  I click on the button "@ProjectsIndex.facet_primarysite_kidney"
        Then  I expect that element "@ProjectsIndex.query" contains the text "Kidney"
        Then  I expect that element "@ProjectsIndex.query" contains the text "Primary Site"
        Then  I expect that element "@ProjectsIndex.table" contains the text "Kidney"

    Scenario: Test any facet
        Then  I wait on element "@ProjectsIndex.facet_primarysite_kidney" for 10000ms to be visible
        Then  I save the value of element "@ProjectsIndex.facet_primarysite_kidney" as "$tmp_value"
        When  I click on the element "@ProjectsIndex.facet_primarysite_kidney"
        Then  I expect that element "@ProjectsIndex.query" contains the text "$tmp_value"
        Then  I expect that element "@ProjectsIndex.table" contains the text "$tmp_value"

    Scenario: Test if searching for Adenocarcinoma returns some results
        Then  I wait on element "@ProjectsIndex.facet_project_search" for 10000ms to be visible    
        Given the element "@ProjectsIndex.facet_project_search" is visible
        When  I set "Adenocarcinoma" to the inputfield "@ProjectsIndex.facet_project_search"
        Then  I pause for 1000ms
        Then  I expect that element "@ProjectsIndex.facet_project_search_result_list" contains at least 2 "@ProjectsIndex.facet_project_search_result_item"

