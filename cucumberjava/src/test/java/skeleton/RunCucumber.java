package skeleton;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(plugin= {"pretty"},monochrome=true,features= {"src/test/resources/skeleton/login.feature"})

@CucumberOptions(plugin= {"pretty","html:src/reports/cucumber-reports","json:src/reports/cucumberreports.json","junit:src/reports/cucumberxml.xml"},monochrome=true,tags= {"not @piyali"})
public class RunCucumber {
	

}
