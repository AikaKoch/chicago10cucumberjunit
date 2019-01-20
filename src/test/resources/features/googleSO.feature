@googleSO
Feature: Google search feature
  Scenario Outline: Testing google search functionality
    Given  User is on the home page of Google
    When User enters "<searchValue>"
    Then User should see "<searchValue>" in the title
    Examples: Test data for google search functionality

    |searchValue|
    |flowers    |
    |cars       |
    |truck      |