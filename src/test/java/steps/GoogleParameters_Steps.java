package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GooglePage;
import utilities.Driver;

public class GoogleParameters_Steps {
    GooglePage gpobj=new GooglePage();
    @Given("User is on the home page of Google")
    public void user_is_on_the_home_page_of_Google() {
        Driver.getDriver().get("https://google.com");
    }

    @When("User enters \"([^\"]*)\"")
    public void user_enters(String string) {
        gpobj.searchBox.sendKeys(string+ Keys.ENTER);

    }

    @Then("User should see \"([^\"]*)\" in the title")
    public void user_should_see_in_the_title(String string) {
        String actualTitle=Driver.getDriver().getTitle();
        String expectedTitle=string+" - Google Search";
        Assert.assertEquals("Titles are not matching,",expectedTitle, actualTitle);

    }
}
