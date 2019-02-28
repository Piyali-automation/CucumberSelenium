Feature: Login feature

Background:
 Given the login url of the application
 When user is registered
 @piyali
Scenario Outline: A valid scenario
	Given The url of the login page
	When admin user enters <username> as username
		And admin user enters <password> as password
		Then <result> user
		
		Examples:
		| username | password | result |
		| abc@gmail.com | abc | admin |
		| xyz@gmail.com | xyz | unknown |

@priyanka		
Scenario: Create an account
	Given Register different account
	
		| fname | lname | email |
		| kim | abc | kim.abc@gmail.com |
		| bhut | xyz | bhut.xyz@gmail.com |		
		
	When user registers
		Then Registration completed
		
		