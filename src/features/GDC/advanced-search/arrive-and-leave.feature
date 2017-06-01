@Repository
Feature: Test arriving and leaving the Advanced Search page

    Scenario: PRTL-1246 - Go from Repository page with filters to Advanced Search and back to Repository page 
        Given I open the site "/repository?filters=~%28op~%27and~content~%28~%28op~%27in~content~%28field~%27cases.primary_site~value~%28~%27Kidney%29%29%29~%28op~%27in~content~%28field~%27cases.project.project_id~value~%28~%27TCGA-KIRC%29%29%29%29%29"
        Then  I wait on element "@Common.accept_privacy_warning_button" to be visible
        When  I click on the button "@Common.accept_privacy_warning_button"

        Then  I wait on element "@Repository.advanced_search_button" to be visible
        Then  I click on the element "@Repository.advanced_search_button"
        Then  I wait on element "@AdvancedSearch.query_textbox" to be visible
        Then  I expect that inputfield "@AdvancedSearch.query_textbox" contains the text "cases.primary_site in [\"Kidney\"] and cases.project.project_id in [\"TCGA-KIRC\"]"
        Then  I click on the element "@AdvancedSearch.back_button"
        Then  I wait on element "@Repository.advanced_search_button" to be visible
