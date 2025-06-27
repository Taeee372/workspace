import java.util.Scanner;

//학생 관리 기능을 제공하는 클래스
//학생 등록, 학생 목록 조회, 학생 한 명 조회
public class StuManager {
  //학생 여러 명을 저장할 수 있는 멤버변수
  private Stu[] students;
  private int cnt; //등록된 학생 수
  private Scanner sc;

  //멤버변수 선언시에는 초기값을 갖지 않는 게 좋기 때문에 생성자에서 넣기
  public StuManager(){
    students = new Stu[5];
    cnt = 0;
    sc = new Scanner(System.in);
  }

  //학생 등록 기능
  public void regStudent(){
    System.out.println("-- 학생 등록을 시작합니다 --");

    //학생 정보 키보드로 입력
    System.out.print("학번 : ");
    int stuNum = sc.nextInt();
    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("국어점수 : ");
    int korScore = sc.nextInt();
    System.out.print("영어점수 : ");
    int engScore = sc.nextInt();


    //학생 객체 생성
    Stu student = new Stu(stuNum, name, korScore, engScore);

    //생성한 객체를 배열에 저장
    students[cnt] = student;
    cnt++;
  }

  //모든 학생의 정보 출력 기능
  public void printStudentInfoAll(){
    System.out.println("-- 모든 학생의 정보는 다음과 같습니다 --");
    for (int i = 0; i < 2; i++){
      students[i].display();
    }
  }

  //학생 한 명의 정보 출력 기능
  public void printStudentInfo(){
    System.out.println("학생 한 명 정보 출력 기능 실행~");
  }

}
