package 실습2;

import java.util.Scanner;

public class 배열2_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("요소의 길이 : ");
    int[] arr = new int[sc.nextInt()];

    for(int i = 0; i < arr.length; i++){
      arr[i] = i + 1;
    }

    int sum = 0;
    for(int i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }
    System.out.println((double) sum/(arr.length));

  }
}
