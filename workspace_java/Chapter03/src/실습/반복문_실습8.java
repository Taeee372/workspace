package 실습;

import java.util.Scanner;

public class 반복문_실습8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("숫자를 입력하세요 : ");
    int num = sc.nextInt();

    int i = 1;
    int cnt = 0;
    while (i < num + 1){
      if (i % 2 == 0){
        cnt++;
      }
      i++;
    }
    System.out.println(cnt);


  }
}
