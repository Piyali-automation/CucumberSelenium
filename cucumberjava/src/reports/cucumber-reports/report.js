$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:skeleton/login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the login url of the application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is registered",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Create an account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@priyanka"
    }
  ]
});
formatter.step({
  "name": "Register different account",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email"
      ]
    },
    {
      "cells": [
        "kim",
        "abc",
        "kim.abc@gmail.com"
      ]
    },
    {
      "cells": [
        "bhut",
        "xyz",
        "bhut.xyz@gmail.com"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.register_different_account(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user registers",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_registers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.registration_completed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:skeleton/shout.feature");
formatter.feature({
  "name": "Shout Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Voice Audible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sean is 20 meters away from Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.sean_is_meters_away_from_Lucia(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts \"free coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.sean_shouts_free_coffee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia hears the message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.lucia_hears_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Voice not Audible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sean is 200 meters away from Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.sean_is_meters_away_from_Lucia(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts \"free coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.sean_shouts_free_coffee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia cannot hear the message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.lucia_hears_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});