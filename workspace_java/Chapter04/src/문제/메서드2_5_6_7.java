package 문제;

import java.util.Scanner;

public class 메서드2_5_6_7 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

   /* 5번
    System.out.print("정수를 입력하세요 : ");
    System.out.println(test5(sc.nextInt()));
    */

    /*6번
    String result = test6(10);
    System.out.println(result);
     */

    // 7번
    // System.out.println(test7(1.1));
  }

  //5번
  public static String test5(int a){
    if (a >= 90) {
      return "A";
    }
    else if (a >= 70) {
      return "B";
    }
    else {
      return "C";
    }
  }

  //6번 10 -> "10"
  public static String test6(int num){
    //문자열 -> 정수
    int result1 = Integer.parseInt("10"); // 정수 10 나옴

    //소문자로 시작 + () -> 메소드 ex) randam();
    //그냥 소문자; -> 변수 ex) randam;

    //정수 -> 문자열
   String result2 = String.valueOf(10); // "10" (문자열 10 나옴)

    return num + "";
  }

  //7번
  public static double test7(double a){
    double sum = a * a;
    return sum;
  }

}
