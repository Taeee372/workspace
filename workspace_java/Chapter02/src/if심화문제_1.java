import java.util.Scanner;

public class if심화문제_1 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int a, b, c;

    System.out.println("삼각형 만들기");

    System.out.print("첫 번째 변의 길이 : ");
    a = sc.nextInt();
    System.out.print("두 번째 변의 길이 : ");
    b = sc.nextInt();
    System.out.print("세 번째 변의 길이 : ");
    c = sc.nextInt();

    if (a + b > c && b + c > a && c + a > b){
      System.out.println("삼각형입니다.");
    }
    else {
      System.out.println("삼각형이 아닙니다.");
    }



  }
}
