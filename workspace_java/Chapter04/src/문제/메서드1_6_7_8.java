package 문제;

import java.util.Scanner;

public class 메서드1_6_7_8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    //test6(5, 2);
    //test7("길동이와 ", "고길동");
    System.out.print("정수 입력 : ");
    int a = sc.nextInt();
    test8(a);
  }

  //6번
  public static void test6(int num1, int num2){
    System.out.println("몫 : " + num1 / num2 + " 나머지 : " + num1 % num2);
  }

  //7번
  public static void test7(String text1, String text2){
    System.out.println(text1 + text2);
  }

  //8번
  public static void test8(int num){
    System.out.println(num);

  }

}
