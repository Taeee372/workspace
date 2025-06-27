package 문제;

import java.util.Scanner;

public class 메서드1_12_13_14_15 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    /* 12번
    System.out.print("정수를 입력하세요 : ");
    int a = sc.nextInt();
    test12(a);
    */

    /* 13번
    System.out.print("정수 두 개를 입력하세요 : ");
    int a = sc.nextInt();
    int b = sc.nextInt();
    test13(a, b);
    */

    /* 14번
    System.out.print("정수 두 개를 입력하세요 : ");
    int a = sc.nextInt();
    int b = sc.nextInt();
    test14(a, b);
    */

    System.out.println("숫자 입력 : ");
    int a = sc.nextInt();
    test15("아부지를 아부지라 부르지 못하고", a);
  }

  //12번
  public static void test12(int a){
    for(int i = 0; i < a + 1; i++){
      System.out.println(i);
    }
  }

  //13번
  public static void test13(int a, int b) {
    int max = a > b ? a : b;
    int min = a > b ? b : a;
    for (int i = min + 1 ; i < max; i++){
      System.out.println(i);
    }
  }

  //14번
  public static void test14(int a, int b){
    int cnt = 0;
    int max = Math.max(a, b);
    int min = Math.min(a, b);
    for(int i = min + 1; i < max; i++){
      if (i % 5 == 0){
        cnt++;
      }
    }
    System.out.println(cnt);
  }

  //15번
  public static void test15(String a, int num){
    for (int i = 0; i < num; i++){
      System.out.println(a);
    }
  }

}
