package 실습2;

import java.util.Scanner;

public class 배열1_10_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] arr = new int[5];

    //배열의 크기만큼 키보드로 입력한 값을 각 요소에 저장한다.
    for(int i = 0; i < arr.length; i++){
      System.out.print(i + "번째 요소의 값 : ");
      arr[i] = sc.nextInt();
    }

    //배열에 저장된 모든 값 출력
    for(int e : arr){
      System.out.println(e);
    }
  }
}
