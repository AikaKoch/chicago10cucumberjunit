@Wikipedia
Feature: Wikipedia search feature
  Scenario: Wikipedia search test
    Given User is on the Wikipedia homepage
    When User enters Steve Jobs to search barf and clicks enter
    Then User should see the first header is displaying Steve Jobs