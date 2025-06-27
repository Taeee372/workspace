import java.util.Scanner;

public class if_case_2_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("성별 입력 : ");
    String gender = sc.next();

    switch (gender){
      case "남":
        System.out.println("남자입니다");
        break;
      case "여":
        System.out.println("여자입니다");
        break;
      default :
        System.out.println("다시 입력하세요");
    }

  }
}
