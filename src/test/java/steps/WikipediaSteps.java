package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import pages.WikipediaPage;
import utilities.Driver;

public class WikipediaSteps {

    WikipediaPage page=new WikipediaPage();
    @Given("User is on the Wikipedia homepage")
    public void user_is_on_the_Wikipedia_homepage() {
        Driver.getDriver().get("https://www.wikipedia.org/");
    }

    @When("User enters Steve Jobs to search barf and clicks enter")
    public void user_enters_Steve_Jobs_to_search_barf_and_clicks_enter() {
        page.searchBtn.sendKeys("Steve Jobs"+ Keys.ENTER);
    }

    @Then("User should see the first header is displaying Steve Jobs")
    public void user_should_see_the_first_header_is_displaying_Steve_Jobs() {
        Assert.assertEquals(page.heading.getText(),"Steve Jobs");

    }

}
