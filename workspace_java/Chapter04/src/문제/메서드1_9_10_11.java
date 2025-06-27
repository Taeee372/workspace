package 문제;

import java.util.Scanner;

public class 메서드1_9_10_11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

   /* 9번
    System.out.print("첫 번째 숫자 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 숫자 : ");
    int b = sc.nextInt();
    test9(a, b);
    */

   /* 10번
    System.out.print("정수를 입력하세요 : ");
    int a = sc.nextInt();
    test10(a);
    */

    System.out.print("정수 두 개를 입력하세요 : ");
    int a = sc.nextInt();
    int b = sc.nextInt();
    test11(a, b);

  }

  //9번
  public static void test9 (int num1, int num2){
    System.out.println(num1 + num2);
  }

  //10번
  public static void test10 (int num){
    if (num % 2 == 0) {
      System.out.println("짝수입니다");
    }
    else if (num % 2 == 1) {
      System.out.println("홀수입니다");
    }
    //System.out.println(num % 2 == 0 ? "짝수" : "홀수"); 위의 식을 삼항연산자로 바꾼 것
  }

  //11번
  public static void test11(int a, int b){
    if (a % 2 == 0 && b % 2 == 0) {
      System.out.println("두 수는 짝수입니다.");
    }
    else if (a % 2 == 1 && b % 2 == 1) {
      System.out.println("두 수는 홀수입니다.");
    }
    else {
      System.out.println("한 수만 짝수입니다.");
    }
    }
  }


