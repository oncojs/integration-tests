@ProjectsCharts
Feature: Projects list page charts
    Test if charts on the projects list page are properly displayed

    Background:
        Given I open the page "ProjectsIndex"

    # SVT-83
    Scenario: Verify bar graph displays top 20 Mutated Genes with case count per project.
        Then  I wait on element "@ProjectsIndex.graph_topmutatedgenes_svg" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.graph_topmutatedgenes_cases" is not empty

    # SVT-83
    Scenario: Verify cancer distribution pie chart displays case count per project and per primary site.
        Then  I wait on element "@ProjectsIndex.graph_casedistribution_svg" for 10000ms to be visible
        Then  I expect that element "@ProjectsIndex.graph_casedistribution_cases" is not empty


        

