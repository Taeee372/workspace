import java.util.Scanner;

public class if_case_1_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("성별 입력 : ");
    String gender = sc.
            next();

    //키보드로 입력받은 문자열이 "남"이라면..
    if(gender.equals("남")){
      System.out.println("남자입니다");
    }

    //키보드로 입력받은 문자열이 "여"라면..
    else if(gender.equals("여")) {
      System.out.println("여자입니다");
    }
    //그 밖에는..
    else{
      System.out.println("다시 입력하세요");
    }

  }
}
