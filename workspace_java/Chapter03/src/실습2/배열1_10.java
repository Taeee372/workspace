package 실습2;

import java.util.Scanner;

public class 배열1_10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("숫자 입력 : ");
    int num = sc.nextInt();

    int[] arr = new int[5];
    for(int i = 0; i < arr.length; i++){
      arr[i] = num;
      System.out.println(arr[num]);
    }
  }
}
