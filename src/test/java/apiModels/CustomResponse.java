package apiModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import utilities.APIRunner;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class CustomResponse {
    private String firstName;
    private String lastName;
    public Contact contact;
    private List<Instructor> instructors;
    private List<Student> students;
    private Company company;
    private String jsonResponse;

    public String getJsonResponse() {
        return jsonResponse;
    }

    public void setJsonResponse(String jsonResponse) {
        this.jsonResponse = jsonResponse;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<Instructor> getInstructors() {
        return instructors;
    }

    public void setInstructors(List<Instructor> instructors) {
        this.instructors = instructors;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Contact getContact() {
        return contact;
    }

    public void setcontact(Contact getContact) {
        this.contact = getContact;
    }
}
