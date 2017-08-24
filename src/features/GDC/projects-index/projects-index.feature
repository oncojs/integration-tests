Feature: Test the projects list page
    Test a few things with project index page

    Background:
        Given I open the page "ProjectsIndex"

    Scenario: Test if things show up
        Then  I wait on element "@ProjectsIndex.graph_topmutatedgenes_svg" for 10000ms to be visible
        And   I wait on element "@ProjectsIndex.projects_table" for 3000ms to be visible
        Then  I expect that element "@ProjectsIndex.projects_table" contains the text "TCGA-BRCA"
        And   I expect that element "@ProjectsIndex.projects_count" contains the exact text "39"
