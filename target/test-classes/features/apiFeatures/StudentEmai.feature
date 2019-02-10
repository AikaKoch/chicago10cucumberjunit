Feature: Email Verification for Students
  @studentEmail
  Scenario: Verify Student email
    When user hits list of student API with "http://cybertekchicago.com/student/all"
    Then user verifies each students email to contain @ and . characters