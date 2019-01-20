@google
Feature: Google search feature
  Scenario: Making sure google search is working as expected
    Given USer is on the google homepage
    And User enters flowers
    When user clicks search button
    Then user should see result related to flowers