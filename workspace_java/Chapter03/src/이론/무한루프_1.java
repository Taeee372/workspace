package 이론;

import java.util.Scanner;

public class 무한루프_1 {
  public static void main(String[] args) {
    //키보드로 정수를 입력받되, 짝수를 입력할 때까지 반복적으로 입력을 받을 때
    Scanner sc = new Scanner(System.in);


    while (true) {
      System.out.print("짝수를 입력하세요 : ");
      int num = sc.nextInt();

      //입력받은 수가 짝수라면 반복문 벗어나세요
      if (num % 2 == 0){
        break;
      }
    }


  }

}
