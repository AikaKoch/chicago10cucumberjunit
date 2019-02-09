package test;

import utilities.DBType;
import utilities.DBUtility;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class TestJDBCUtility {
    public static void main(String[] args) throws SQLException {
        //run query: display first 3 select employee id, first name, last name and salary using
        //utility class and print result

        List<Map<String, Object>> resultTable;

        String query="select employee_id, first_name, last_name,salary from employees\n" +
                "where rowNum in(1,2,3)";

        DBUtility.openConnection(DBType.ORACLE.ORACLE);

        resultTable=DBUtility.executeSQLQuery(query);

        DBUtility.closeConnection();

        for(Map<String, Object>map:resultTable){
            System.out.println(map);

        }
    }
}
