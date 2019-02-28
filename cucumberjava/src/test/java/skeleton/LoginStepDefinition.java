package skeleton;

import java.util.List;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
 @Before
 public void beforeScenario(Scenario scenario) {
	 System.out.println("in before "+scenario.getName());
 }
	
	@After
	public void afterScenario(Scenario scenario) {
		System.out.println("Scenario is : "+scenario.getStatus().name());
	}
	
	@Given("Register different account")
	public void register_different_account(io.cucumber.datatable.DataTable dataTable) {
		List<List<String>> lists = dataTable.asLists();
		System.out.println(lists.get(1).get(0) + "\t\t" + lists.get(1).get(1) + "\t\t" +lists.get(1).get(2));
		System.out.println(lists.get(2).get(0) + "\t\t" + lists.get(2).get(1) + "\t\t" +lists.get(2).get(2));

	}

	@When("user registers")
	public void user_registers() {

	}

	@Then("Registration completed")
	public void registration_completed() {

	}

	@Given("The url of the login page")
	public void the_url_of_the_login_page() {

	}

	@When("admin user enters {word} as username")
	public void admin_user_enters_abc_gmail_com_as_username(String username) {
		System.out.println("Username : " + username);
	}

	@When("admin user enters {word} as password")
	public void admin_user_enters_abc_as_password(String password) {
		System.out.println("Password : " + password);
	}

	@Then("{word} user")
	public void admin_user(String result) {
		System.out.println("result : " + result);
	}

}
