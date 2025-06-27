import java.util.Scanner;

public class IF실습_1 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int a, b;

    System.out.print("첫 번째 수 : ");
    a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    b = sc.nextInt();

    if(a + b > 50){
      System.out.println("두 수의 합이 50보다 큽니다.");
    }
    else if(a + b <= 50){
      System.out.println("두 수의 합이 50이하 입니다.");
    }

  }
}
