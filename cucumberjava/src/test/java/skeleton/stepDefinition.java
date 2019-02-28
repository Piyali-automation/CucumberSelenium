package skeleton;

import com.dev.Person;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinition {

	Person sean;
	Person lucia;

	@Given("Sean is {int} meters away from Lucia")
	public void sean_is_meters_away_from_Lucia(int distance) {
		sean = new Person();
		sean.setDistance(distance);
		System.out.println("Sean is " + distance + "meters away");

	}

	@When("Sean shouts {string}")
	public void sean_shouts_free_coffee(String message) {
		sean.setMessage(message);
		System.out.println("Sean shouts free coffee");
	}

	@Then("Lucia hear(s)/(cannot hear) the message")
	public void lucia_hears_the_message() {
		String message=sean.getMessage();
		Assert.assertEquals("free coffee", message);
		
		

	}

	/*@Then("Lucia can not hears the message")
	public void lucia_can_not_hears_the_message() {
		System.out.println("Lucia can not hear");	


	}*/

}
