package 실습_2트;

import java.util.Scanner;

public class 배열2_1_2트 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("정수를 입력하세요 : ");
    int[] arr = new int[sc.nextInt()];
    for (int i = 0; i < arr.length; i++){
      arr[i] = i + 1;
      System.out.println(arr[i]);
    }

    int sum = 0;

    for (int i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }

    double avg = (double) sum / arr.length;
    System.out.println(avg);
  }
}
