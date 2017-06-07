@ProjectsCharts
Feature: Projects list page charts
    Test if charts on the projects list page are properly displayed

    Background:
        Given I open the page "ProjectsIndex"
 
    Scenario: Test if Top mutated genes chart is displayed
        Then  I wait on element "@ProjectsIndex.graph_topmutatedgenes_svg" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.graph_topmutatedgenes_cases" is not empty

    Scenario: Test if Case Distribution per project is displayed
        Then  I wait on element "@ProjectsIndex.graph_casedistribution_svg" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.graph_casedistribution_cases" is not empty


        

