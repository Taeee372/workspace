package 문제;

import java.util.Scanner;

public class 메서드2_1_2_3_4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // 1번
    // int sum = test1(10, 20);
    // System.out.println(sum);

    /* 2번
    System.out.print("정수 두 개를 입력하세요 : ");
    int a = sc.nextInt();
    int b = sc.nextInt();

    int result = test2(a, b);
    System.out.println(result)
     */

    /*
    System.out.print("정수 두 개를 입력하세요 : ");
    int a = sc.nextInt();
    int b = sc.nextInt();

    int max = test3(a, b);
    System.out.println(max);
     */

    // 4번
    String result = test4("길동이와", "고길동");
    System.out.println(result);

  }

  //1번
  public static int test1(int a, int b){
    int sum = a + b;
    return sum;
  }

  //2번
  public static int test2(int a, int b){
    return a * b;
  }

  //3번
  public static int test3(int a, int b){
   return Math.max(a, b);
    }

  //4번
  public static String test4(String a, String b){
   return a + b;
  }


}

