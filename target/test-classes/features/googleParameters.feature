@googleParameters
Feature: Google Search Functionality
  Scenario: Testing google search
    Given User is on the home page of Google
    When User enters "flowers"
    Then User should see "flowers" in the title
