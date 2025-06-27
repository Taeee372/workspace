import java.util.Scanner;

public class IF실습_2 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num;

    System.out.print("숫자를 입력하세요 : ");
    num = sc.nextInt();

    if(num % 2 == 0){
      System.out.println("짝수입니다.");
    }
    else if (num % 2 == 1) { //or (num % 2 != 0)
      System.out.println("홀수입니다.");
    }
  }
}
