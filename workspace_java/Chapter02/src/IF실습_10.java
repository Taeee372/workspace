import java.util.Scanner;

public class IF실습_10 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num1, num2, num3;

    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("세 번째 수 : ");
    num3 = sc.nextInt();

    if(num1 > num2 && num2 > num3){
      System.out.println(num1 + ">" + num2 + ">" + num3);
    }
    else if (num1 > num3 && num3 > num2) {
      System.out.println(num1 + ">" + num3 + ">" + num2);
    }
    else if (num2 > num1 && num1 > num3) {
      System.out.println(num2 + ">" + num1 + ">" + num3);
    }
    else if (num2 > num3 && num3 > num1) {
      System.out.println(num2 + ">" + num3 + ">" + num1);
    }
    else if (num3 > num1 && num1 > num2) {
      System.out.println(num3 + ">" + num1 + ">" + num2);
    }
    else if (num3 > num2 && num2 > num1) {
      System.out.println(num3 + ">" + num2 + ">" + num1);
    }


  }
}
