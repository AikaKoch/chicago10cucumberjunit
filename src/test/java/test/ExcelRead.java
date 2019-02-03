package test;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import utilities.Config;

import java.io.File;
import java.io.FileInputStream;

public class ExcelRead {
    public static void main(String[] args) throws Exception {
        File file = new File("src/SampleData.xlsx");
        System.out.println(file.exists());
        //openning reading file
        FileInputStream inputStream = new FileInputStream(file);
        //loading into the class
        XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
        //passing worksheet and name
        XSSFSheet worksheet = workbook.getSheet("Employees");
        System.out.println(worksheet.getRow(2).getCell(1));
        System.out.println(worksheet.getRow(5).getCell(0));
        System.out.println("------------");
        System.out.println(worksheet.getRow(2).getCell(1).getStringCellValue());
        System.out.println("--------------");

        int usedRows = worksheet.getPhysicalNumberOfRows();
        System.out.println("physical number of rows " + usedRows);
        int lastUsedRow = worksheet.getLastRowNum();
        System.out.println("last used row " + lastUsedRow);

        for (int i = 0; i < usedRows; i++) {
            if (worksheet.getRow(i).getCell(0).toString().equals("Nancy")) {
                System.out.println("Nancy's job " + worksheet.getRow(i).getCell(2));

            }
        }
            System.out.println("-----------");
            for (int k = 0; k <usedRows; k++) {
                if (worksheet.getRow(k).getCell(1).toString().equals(Config.getProperty("lastName"))) {
                    System.out.println("Haan's name " + worksheet.getRow(k).getCell(0));
                    System.out.println("Haan's job " + worksheet.getRow(k).getCell(2));
                }
            }
            workbook.close();
            inputStream.close();

        }
    }


