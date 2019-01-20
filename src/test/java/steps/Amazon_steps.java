package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import pages.AmazonPage;
import utilities.Driver;

public class Amazon_steps {
   AmazonPage amznPage=new AmazonPage();
    @Given("when user enters headphones keyword")
    public void when_user_enters_headphones_keyword() {
         Driver.getDriver().get("https://www.amazon.com/");
    }

    @When("user enters headphones keyword")
    public void user_enters_headphones_keyword() {
        amznPage.searchBox.sendKeys("headphones");
    }

    @When("User click to search button")
    public void user_click_to_search_button() {
        amznPage.amazonSearchBtn.click();

    }

    @Then("User should see headphones in result")
    public void user_should_see_headphones_in_result() {
        String actualText=amznPage.amazonSearchResult.getText();
        System.out.println(actualText);
               Assert.assertTrue("The keyword headphones was not located",actualText.contains("headphones"));
    }

}
