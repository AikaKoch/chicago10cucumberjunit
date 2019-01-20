package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.YoutubePage;
import utilities.Driver;

public class Youtube_steps {
    YoutubePage page=new YoutubePage();
    @Given("User is on the youtube homepage")
    public void user_is_on_the_youtube_homepage() {
        Driver.getDriver().get("https://www.youtube.com/");
    }

    @Given("User is able to see the search box")
    public void user_is_able_to_see_the_search_box() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertTrue(page.searchLine.isDisplayed());
    }

    @Given("User is able to see the search button")
    public void user_is_able_to_see_the_search_button() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertTrue(page.searchBox.isDisplayed());
    }

    @When("User searches for FUNNY CAT VIDEOS")
    public void user_searches_for_FUNNY_CAT_VIDEOS() throws InterruptedException {
        Thread.sleep(2000);
       page.searchLine.sendKeys("FUNNY CAT VIDEOS"+ Keys.ENTER);
       Thread.sleep(2000);

    }

    @Then("User should see results related to funny cat videos")
    public void user_should_see_results_related_to_funny_cat_videos() {
        String actual=Driver.getDriver().getTitle();
        System.out.println(actual);
        String expected="CAT";

        Assert.assertTrue("Does not contain", actual.contains(expected));
    }
    @When("User searches for FUNNY DOG VIDEOS")
    public void user_searches_for_FUNNY_DOG_VIDEOS() throws InterruptedException {
        Thread.sleep(2000);
        page.searchLine.sendKeys("FUNNY DOG VIDEOS"+Keys.ENTER);
        Thread.sleep(2000);
    }

    @Then("User should see results related to funny dog videos")
    public void user_should_see_results_related_to_funny_dog_videos() throws InterruptedException {
        String actual=Driver.getDriver().getTitle();
        System.out.println(actual);
        String expected="DOG";
        Thread.sleep(2000);
        Assert.assertTrue("Does not contain", actual.contains(expected));
        Thread.sleep(2000);
    }

    @When("User searches for FUNNY PET VIDEOS")
    public void user_searches_for_FUNNY_PET_VIDEOS() throws InterruptedException {
        Thread.sleep(2000);
        page.searchLine.sendKeys("FUNNY PET VIDEOS"+Keys.ENTER);
        Thread.sleep(2000);
    }

    @Then("User should see results related to funny pet videos")
    public void user_should_see_results_related_to_funny_pet_videos() throws InterruptedException {
        String actual=Driver.getDriver().getTitle();
        System.out.println(actual);
        String expected="PET";
        Thread.sleep(2000);
        Assert.assertTrue("Does not contain", actual.contains(expected));
        Thread.sleep(2000);
    }



}
