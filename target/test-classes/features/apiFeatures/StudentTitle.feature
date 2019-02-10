Feature: Title Verification for Students
  @studentTitle
  Scenario: Verify Student title
    When user hits list of student API with "http://cybertekchicago.com/student/all"
    Then user verifies each students title to be at least two letters