import java.util.Scanner;

public class StudentTest {
  public static void main(String[] args) {
    StudentManager studentManager = new StudentManager();
    Scanner sc = new Scanner(System.in);

    System.out.println("학생관리 프로그램을 실행합니다.");
    while (true){
      System.out.print("1)학생등록 2)학생정보변경(연락처) 3)학생정보출력 4)모든학생정보출력 5)프로그램 종료 : ");
      int i = sc.nextInt();

      if (i == 1){
        studentManager.regStudent();
      }
      else if (i ==2) {
        studentManager.setTel();
      }
      else if (i == 3) {
        studentManager.printStudentInfo();
      }
      else if (i == 4){
        studentManager.printStudentInfoAll();
      }
      else {
        studentManager.programOff();
        break;
      }
    }



  }
}
