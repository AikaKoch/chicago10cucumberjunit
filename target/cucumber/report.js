$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/datatablesSO.feature");
formatter.feature({
  "name": "Testing datatables website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.step({
  "name": "User should enter firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter extension \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter start date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters first name \"\u003cfirstname\u003e\" to search box",
  "keyword": "And "
});
formatter.step({
  "name": "User should see first name \"\u003cfirstname\u003e\" is inserted in the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for datatables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "office",
        "extension",
        "date",
        "salary"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables_stepDefs.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(Datatables_stepDefs.java:159)\r\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:16)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});