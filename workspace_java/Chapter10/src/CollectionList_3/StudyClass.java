package CollectionList_3;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudyClass {
  private List<Student> studentList;
  private String className;
  private String teacherName;
  private Scanner sc;

  public StudyClass(List<Student> studentList, String className, String teacherName) {
    sc = new Scanner(System.in);
    this.studentList = studentList;
    this.className = className;
    this.teacherName = teacherName;

  }


  public void printStudentAllInfo(){
    System.out.print("반이름을 입력하세요 : ");
    String className = sc.next();
  }
}
