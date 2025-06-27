import java.util.Scanner;

public class 문자열비교2 {
  public static void main(String[] args) {
    //키보드로 문자열 데이터를 하나 입력받아,
    //입력받은 문자열 데이터가 "java"라는 글자라면 "A"를 출력!
    Scanner sc = new Scanner(System.in);

    System.out.print("문자열 입력 : ");
    String data = sc.next();

    if(data.equals("java")){
      System.out.println("A");
    }

  }
}
