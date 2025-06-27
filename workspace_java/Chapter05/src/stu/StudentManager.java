package stu;

import java.sql.SQLOutput;
import java.util.Scanner;

public class StudentManager {
  private Scanner sc;
  private Student[] students;
  private int cnt; //등록된 학생 수

  public StudentManager(){
    sc = new Scanner(System.in);
    students = new Student[3];
    cnt = 0;
  }

  //학생 등록
  public void regStudent(){
    //학생이 3명 등록되었다면 학생 등록 실행 X
    if (cnt >= 3) {
      System.out.println("더 이상 학생을 등록할 수 없습니다.");
    }
    else{
      System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요");

      //입력받은 정보로 학생 생성
      Student student = createStudent();

      //생성한 학생을 배열에 저장
      students[cnt++] = student;
      //[cnt++]이랑 cnt++; 같은 말

      // students[cnt++] = createStudent(); 최종적으로 이렇게까지 줄이는 거 가능
    }
  }

  //학생정보변경(연락처)
  public void changeTelInfo(){
    System.out.println("학생의 연락처를 변경합니다.");
    System.out.print("변경 학생 : ");
    String name = sc.next();

    boolean isNotFound = true;
    for (int i = 0; i < cnt; i++){
      if (students[i].getName().equals(name)) {
        System.out.println("연락처 : ");
        String tel = sc.next();
        students[i].setTel(tel);
        System.out.println("변경 완료 되었습니다.");
        isNotFound = !isNotFound; //false와 같은 의미 부정연산자
        break;
      }
    }
    if (isNotFound){
      System.out.println("이름이 일치하는 학생이 없습니다.");
    }
  }
  //학생정보출력
  public void printStudent(){
    System.out.print("정보를 열람할 학생 : ");
    String name = sc.next();

    //일치하는 학생이 있으면 정보 출력, 없으면 '일치하는 학생 없음' 출력
    boolean isNotFound = true;
    for(int i = 0; i < cnt; i++){
      if (students[i].getName().equals(name)) {
        students[i].display();
        isNotFound = false;
        break; //필수는 아니지만 효율성을 위해 넣어주는 브레이크 - 찾았으면 뒤까지 뒤져보지말고 멈춰~~
      }
    }
    if (isNotFound) {
      System.out.println("못찾았어");
    }
  }
  //모든학생정보출력
  public void printStudentAll(){
    System.out.println("모든 학생의 정보입니다. 현재 총 학생 수는 " + cnt + "명입니다.");
    for (int i = 0; i < cnt; i++){
      students[i].display();
    }
  }

  //키보드로 입력받은 정보를 가진 학생 객체를 생성 후 리턴하는 메서드
  public Student createStudent(){

    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("나이 : ");
    int age = sc.nextInt();
    System.out.print("연락처 : ");
    String tel = sc.next();
    System.out.print("학점 : ");
    String grade = sc.next();

    //입력받은 정보로 학생 생성
    Student student = new Student(name, age, grade, tel);

    return student;
  }
}
