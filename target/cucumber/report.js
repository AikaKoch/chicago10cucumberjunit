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
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
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
  "status": "passed"
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
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
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
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
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
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
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
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
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
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables_stepDefs.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables_stepDefs.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
});