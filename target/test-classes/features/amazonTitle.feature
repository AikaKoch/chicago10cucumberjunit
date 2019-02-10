@amazon
Feature: Amazon Title Verification
@testReport
  Scenario: Amazon title Verification
    When user goes to amazon application
    Then user should see proper title

    Scenario: Amazon url verification
      When user goes to amazon application
      Then user should validate url

