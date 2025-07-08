import java.util.Scanner;

public class Exception_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //sc 사용 후...

    sc.close(); //스캐너 그만 사용하겠디.



    Student stu = null;

    try {
      System.out.println(stu.getName());
    }catch (NullPointerException e){
      System.out.println("학생이 null이어서 예외처리됩니다");
      stu = new Student();
      System.out.println(stu.getName());
    }finally { //선택사항, 예외 발생 유무에 상관없이 무조건 실행해야 하는 코드 작성
      System.out.println(111);
    }
  }
}
