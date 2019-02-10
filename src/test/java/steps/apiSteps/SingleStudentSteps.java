package steps.apiSteps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utilities.APIRunner;

public class SingleStudentSteps {
    @When("user hits single student API with {string}")
    public void user_hits_single_student_API_with(String uri) {
        APIRunner.runGet(uri);
        System.out.println(APIRunner.getResponse().getFirstName());
        System.out.println(APIRunner.getResponse().getLastName());
        Assert.assertTrue("Student first name is missing",APIRunner.getResponse().getFirstName()!=null);
        Assert.assertTrue("Student last name is missing",APIRunner.getResponse().getLastName()!=null);
        Assert.assertTrue("Student address is missing",APIRunner.getResponse().getContact().getEmailAddress()==null);
        Assert.assertTrue("Student company name is missing",APIRunner.getResponse().getCompany().getAddress().getCity()!=null);

    }

    @Then("user checks for required attributes")
    public void user_checks_for_required_attributes() {

    }
}
