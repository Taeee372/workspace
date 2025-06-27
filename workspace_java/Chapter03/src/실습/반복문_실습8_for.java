package 실습;

import java.util.Scanner;

public class 반복문_실습8_for {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.print("숫자를 입력하세요 : ");
    int num = sc.nextInt();

    int cnt = 0;
    for (int i = 1; i < num + 1; i++){
      if (i % 2 == 0){
        cnt++;
      }
    }
    System.out.println("1과 " + num + "사이의 짝수 갯수는 " + cnt + "개 입니다.");
  }
}
