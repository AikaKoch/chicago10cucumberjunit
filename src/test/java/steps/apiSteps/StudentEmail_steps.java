package steps.apiSteps;

import apiModels.Student;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import utilities.APIRunner;

public class StudentEmail_steps {
    @Then("user verifies each students email to contain @ and . characters")
    public void user_verifies_each_students_email_to_contain_and_characters() {
        int counter=0;
        for(Student student:APIRunner.getResponse().getStudents()){
            String email=student.getContact().getEmailAddress();
            System.out.println(email);
            Assert.assertTrue("Student email is failing at index: "+ counter,email.contains("@")&&email.contains("."));
            counter++;
        }
    }
}
