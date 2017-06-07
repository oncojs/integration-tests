Feature: Test Homepage
    To be honest
    I am not sure what significance the text in this section has

    Background:
        Given I open the page "Home"

    @Pending
    Scenario: Warning prompt hides after accepting
        Given the element "@Common.privacy_warning" is visible
        When  I click on the button "@Common.accept_privacy_warning_button"
        Then  I expect that element "@Common.accept_privacy_warning_button" is not visible

    @Pending
    Scenario: Search for BRAF shows a result containing BRAF1
        Then  I wait on element "@Home.search_box" for 10000ms to be visible        
        Given the element "@Home.search_box" is visible
        When  I set "BRAF" to the inputfield "@Home.search_box"
        And   I wait on element "@Home.search_results" for 10000ms to be visible
        Then  I expect that element "@Home.search_results" contains the text "BRAF1"
