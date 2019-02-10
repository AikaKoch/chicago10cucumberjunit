package apiTests;

import apiModels.CustomResponse;
import apiModels.Instructor;
import apiModels.Student;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;
import utilities.APIRunner;

import java.io.IOException;

public class PostApi {
    @Test
    public void postInstructor(){
        Instructor instructor=new Instructor();
        instructor.setLastName("Doe");
        instructor.setFirstName("New Joe");
        instructor.setSubject("Advanced Machine Learning");
        instructor.setBatch(10);

     Response response= RestAssured.given().contentType(ContentType.JSON).body(instructor)
                .when().post("http://cybertekchicago.com/instructor/create");
        System.out.println(response.statusCode());
        System.out.println(response.asString());
    }
    @Test
    public void customSingleStudent() throws IOException {
      Response response= RestAssured.get("http://cybertekchicago.com/student/87");
        ObjectMapper mapper=new ObjectMapper();
        CustomResponse cr=mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getFirstName());
        System.out.println(cr.getContact().getEmailAddress());

    }
    @Test
    public void listOfInstructors() throws IOException {
        Response response=RestAssured.get("http://cybertekchicago.com/instructor/all");
        System.out.println(response.statusCode());
        ObjectMapper mapper=new ObjectMapper();
        CustomResponse cr=mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getInstructors().get(0).getSubject());
        for(int i=0;i<cr.getInstructors().size();i++){
            if(cr.getInstructors().get(i).getSubject()==null){
                System.out.print("firstNAme "+cr.getInstructors().get(i).getFirstName()+" ");
                System.out.println("lastNAme "+cr.getInstructors().get(i).getLastName());
                System.out.println("-------------");

            }
        }

    }
    @Test
    public void studentLocation() throws IOException {
        Response response=RestAssured.get("http://cybertekchicago.com/student/all");
        ObjectMapper mapper=new ObjectMapper();
        CustomResponse cr=mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getStudents().size());
        int counter=0;
        for(Student student:cr.getStudents()){
            if(student.getCompany().getAddress().getCity().equalsIgnoreCase("Chicago")){
                System.out.println(student.getFirstName());
                counter++;
            }
        }
        System.out.println("Total: "+counter);
    }
    @Test
    public void utilTest(){
        APIRunner.runGet("http://cybertekchicago.com/student/88");
        String companyLocation=APIRunner.getResponse().getCompany().getAddress().getCity();
        System.out.println(companyLocation);
    }
    @Test
    public void batch7Students() {
        APIRunner.runGet("http://cybertekchicago.com/student/all");
        int counter = 0;
        for (Student student : APIRunner.getResponse().getStudents()) {
            if (student.getBatch() == 7) {
                System.out.println(student.getFirstName());
                counter++;
            }
             }
            System.out.println("total batch 7: " + counter);
            System.out.println("---------");
            int c = 0;
            for (Student student1 : APIRunner.getResponse().getStudents()) {
                if (student1.getCompany().getCompanyName().equals("KOLOBOK")) {
                    System.out.println(student1.getFirstName());
                    c++;
                }
            }
            System.out.println("total students in Kolobok: " + c);
        }

    }
