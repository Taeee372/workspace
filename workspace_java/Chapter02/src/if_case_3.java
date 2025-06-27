import java.util.Scanner;

public class if_case_3 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num1, num2;
    String str;

    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("연산자 : ");
    str = sc.next();

    if (str.equals("+")){
      System.out.println(num1 + " + " + num2 + " = " + (num1 + num2) );
    }
    else if (str.equals("-")) {
      System.out.println(num1 + " - " + num2 + " = " + (num1 - num2) );
    }
    else if (str.equals("*")) {
      System.out.println(num1 + " * " + num2 + " = " + (num1 * num2) );
    }
    else if (str.equals("/")) {
      System.out.println(num1 + " / " + num2 + " = " + ((double)num1 / num2) );
    }
    else {
      System.out.println("연산자를 잘못 입력하였습니다.");
    }


  }
}
