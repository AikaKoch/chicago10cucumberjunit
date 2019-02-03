package test;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JDBCExample {

    /*
    *
    *
    |   employee_id | first_name | last_name  | salary |
    |           100 | Steven     | King       | 24000  |
    |           101 | Neen       | Kochhar    | 17000  |
    |           102 | Lex        | De Haan    | 17000  |
    *
    * */


    public static void main(String[] args) throws SQLException {
        //Hostname:ec2-100-24-3-161.compute-1.amazonaws.com
        //hr
        //hr
        //post:1521
        //SID:xe
        String oracleURL = "jdbc:oracle:thin:@ec2-100-24-3-161.compute-1.amazonaws.com:1521:xe";
        String OracleUsername = "hr";
        String oraclePAssword = "hr";

        Connection connection = DriverManager.getConnection(oracleURL, OracleUsername, oraclePAssword);
        //openning the connection
        Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
        //run our query
        ResultSet resultSet = statement.executeQuery("select employee_id, first_name,last_name from employees");
        //inside the result set we have table now.
        // resultSet.next();
        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();
        //System.out.println("The column count is: "+columnCount);
//        System.out.println("The column name 1 "+metaData.getColumnName(1));
//        System.out.println("The column name 2 "+metaData.getColumnName(2));
//        System.out.println("The column name 3 "+metaData.getColumnName(3));
        List<Map<String, Object>> table = new ArrayList<>();
        while (resultSet.next()) {
            Map<String, Object> map = new HashMap<>();
            for (int column = 1; column <= columnCount; column++) {
                map.put(metaData.getColumnName(column), resultSet.getObject(column));
            }
            table.add(map);
        }
        resultSet.close();
        statement.close();
        connection.close()   ;
        
       for(Map<String,Object>map:table){
           System.out.println(map);
       }


    }
    //resultSet.next();
                                   //if we have row it return true, if not false


//                           System.out.println("First row "+resultSet.getObject("employee_id"));
//                           System.out.println("First row "+resultSet.getObject("first_name"));
//                           System.out.println("First row "+resultSet.getObject("last_name"));
//
//        System.out.println("First row "+resultSet.getObject(1));
//        System.out.println("First row "+resultSet.getObject(2));
//        System.out.println("First row "+resultSet.getObject(3));
//        System.out.println("---------------");
//        resultSet.next();
//        resultSet.next();
//        resultSet.next();
//        resultSet.next();
//        resultSet.next();
//        System.out.println("****");
     //   while (resultSet.next()) {
//            if (resultSet.getRow() == 107) {
//                System.out.println(resultSet.getObject("first_name"));
//                System.out.println(resultSet.getObject("last_name"));
//
//            }
     //   }
//        System.out.println("Get row Number: "+resultSet.getRow());
//        resultSet.beforeFirst();
//        resultSet.next();
//        System.out.println("Get row number: "+resultSet.getRow());
//        resultSet.last();
//        System.out.println("get row num "+resultSet.getRow());
//        System.out.println("------------");
//        ResultSetMetaData metaData1=resultSet.getMetaData();
//        System.out.println("Number of columns: "+metaData.getColumnCount());
//        System.out.println("column name: "+metaData.getColumnName(1));

                //employee_id is a column name=>not case sensitive











  //  public static List<Map<String, Object>> expectedResult (){

//        List<Map<String, Object>> table = new ArrayList<>();
//
//        Map<String, Object> map1 = new HashMap<>();
//        map1.put("employee_id", 100);
//        map1.put("first_name", "Steven");
//        map1.put("last_name", "King");
//        map1.put("salary", 24000);
//
//        Map<String, Object> map2 = new HashMap<>();
//        map2.put("employee_id", 101);
//        map2.put("first_name", "Neen");
//        map2.put("last_name", "Kochhar");
//        map2.put("salary", 17000);
//
//
//        Map<String, Object> map3 = new HashMap<>();
//        map3.put("employee_id", 102);
//        map3.put("first_name", "Lex");
//        map3.put("last_name", "De Haan");
//        map3.put("salary", 17000);
//
//        table.add(map1);
//        table.add(map2);
//        table.add(map3);
//
//        return table;

   // }
}
