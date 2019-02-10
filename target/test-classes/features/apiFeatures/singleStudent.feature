Feature: Single Student Automation
  @singleStudent
  Scenario: Single Student Attribute validation
  When user hits single student API with "http://cybertekchicago.com/student/88"
    Then user checks for required attributes
