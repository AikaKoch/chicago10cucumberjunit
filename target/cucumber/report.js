$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/wiki.feature");
formatter.feature({
  "name": "Wikipedia search feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Wikipedia"
    }
  ]
});
formatter.scenario({
  "name": "Wikipedia search test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wikipedia"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikipediaSteps.user_is_on_the_Wikipedia_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Steve Jobs to search barf and clicks enter",
  "keyword": "When "
});
formatter.match({
  "location": "WikipediaSteps.user_enters_Steve_Jobs_to_search_barf_and_clicks_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the first header is displaying Steve Jobs",
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaSteps.user_should_see_the_first_header_is_displaying_Steve_Jobs()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});