package test;

import java.util.Arrays;
import java.util.Scanner;

public class Test5 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] ball = new int[3];

    for (int i = 0; i < ball.length; i++){
      int rand = (int)(Math.random() * 9 + 1);
      ball[i] = rand;
      for (int j = 0; j < i; j++){
        if(ball[j] == rand){
          i--;
          break;
        }
      }
    }

    System.out.print(Arrays.toString(ball) + " ");

    System.out.println("숫자를 정했습니다. 게임을 시작합니다");

    System.out.print("1 >> ");
    int[] arr = {sc.nextInt(), sc.nextInt(), sc.nextInt()};

    int strikeCnt = 0;
    int ballCnt = 0;

    for (int i = 0; i < ball.length; i++){
      for(int j = 0; j < ball.length; j++){
        if (ball[i] == arr[j] && i == j) {
          strikeCnt++;
        }
        else if (ball[i] == arr[j] && i != j) {
          ballCnt++;
        }
      }
    }
    System.out.println("ball : " + ballCnt);

    System.out.println("strike : " + strikeCnt);

  }
}
