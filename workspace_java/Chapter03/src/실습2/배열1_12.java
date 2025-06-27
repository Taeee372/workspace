package 실습2;

import java.util.Scanner;

public class 배열1_12 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[] scores = new int[3];// 0:국, 1:영, 2:수

    System.out.print("국어 점수 : ");
    scores[0] = sc.nextInt();
    System.out.print("영어 점수 : ");
    scores[1] = sc.nextInt();
    System.out.print("수학 점수 : ");
    scores[2] = sc.nextInt();

    for (int i = 0; i < scores.length; i++) {
      System.out.println(scores[i]);
    }

    int sum = 0;
    for(int e: scores){
    sum = sum + e;
    }
    System.out.println("총점 : " + sum);

    System.out.println("평균 : " + ((double)sum/ scores.length));
  }
}
