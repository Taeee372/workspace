package 실습;

import java.util.Scanner;

public class 반복문_실습11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int num1 = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int num2 = sc.nextInt();

    int sum = 0;
    for (int i = num1 + 1; i < num2; i++){
      sum = sum + i;
    }
    for(int j = num2 + 1; j < num1; j++){
      sum = sum + j;
    }
    System.out.println(sum);
  }
}
