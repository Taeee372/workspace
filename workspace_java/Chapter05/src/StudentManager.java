import javax.xml.transform.Source;
import java.sql.SQLOutput;
import java.util.Scanner;

public class StudentManager {
  private Student students[];
  private int cnt;
  private Scanner sc;

  public StudentManager(){
    students = new Student[3];
    cnt = 0;
    sc = new Scanner(System.in);
  }



  //학생 등록
  public void regStudent(){
    System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요.");

    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("나이 : ");
    int age = sc.nextInt();
    System.out.print("연락처 : ");
    String tel = sc.next();
    System.out.print("학점 : ");
    String grade = sc.next();

    Student student = new Student(name, age, tel, grade);

    students[cnt] = student;
    cnt++;

  }

  //학생 정보 변경
  public void setTel(){
    System.out.println("학생의 연락처를 변경합니다.");

    System.out.print("변경 학생 : ");
    String name = sc.next();
    System.out.print("연락처 : ");
    String tel = sc.next();



    System.out.println("변경 완료 되었습니다.");
  }

  //학생정보출력
  public void printStudentInfo(){
    System.out.print("정보를 열람할 학생 : ");
    String name = sc.next();
    System.out.println("요청하신 학생의 정보입니다.");
    for (int i = 0; i < cnt; i++){
      if (students[i].getName().equals(name)){
        students[i].display();
      }
    }


  }


  //모든 학생 정보 출력
  public void printStudentInfoAll(){
    System.out.println("모든 학생의 정보입니다. 현재 총 학생 수는 2명입니다.");
    for (Student s : students){
      s.display();
    }

  }

  public void programOff(){
    System.out.println("프로그램을 종료합니다.");
  }

}
