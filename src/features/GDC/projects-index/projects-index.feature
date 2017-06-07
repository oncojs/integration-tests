Feature: Test the projects list page
    Test a few things with project index page

    Background:
        Given I open the page "ProjectsIndex"

    Scenario: Test if things show up
        Then  I wait on element "#skip > div > div.css-rk9c3n > span > div.css-mfuoyb > div:nth-child(1) > span > div > svg" for 10000ms to be visible
        And   I wait on element "#projects-table" for 3000ms to be visible
        Then  I expect that element "#projects-table" contains the text "TCGA-BRCA"
        And   I expect that element "#skip > div > div.css-rk9c3n > span > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) > b" contains the exact text "39"
