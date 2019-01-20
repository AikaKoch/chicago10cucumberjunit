package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.GooglePage;
import utilities.Driver;

public class google_stepDefs {
    GooglePage gpObj=new GooglePage();

    @Given("USer is on the google homepage")
    public void user_is_on_the_google_homepage() {
        Driver.getDriver().get("https://google.com");
    }

    @Given("User enters flowers")
    public void user_enters_flowers() {
        gpObj.searchBox.sendKeys("flowers");

    }

    @When("user clicks search button")
    public void user_clicks_search_button() {
        gpObj.searchButton.click();

    }

    @Then("user should see result related to flowers")
    public void user_should_see_result_related_to_flowers() {
       String actualTitle=Driver.getDriver().getTitle();
        Assert.assertTrue("Keyword flowers was not located in title",
                actualTitle.contains("flowers"));

    }



}
