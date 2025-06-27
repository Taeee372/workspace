import java.util.Scanner;

public class IF실습_4 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num;

    System.out.print("숫자를 입력하세요 : ");
    num = sc.nextInt();

    if (num % 3 == 0){
      System.out.println("3의 배수입니다.");
    }
  }
}
