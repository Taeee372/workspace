package test;

import java.util.Arrays;
import java.util.Scanner;

public class Test5_2 {
  public static void main(String[] args) {
    //---크기가 3인 배열에 1~9까지의 랜덤한 수를 중복없이 저장---//

    //--변수는 통상적으로 위에 만들어놓는다.
    //크기가 3인 배열인 정수형 배열을 생성, 모든 요소는 0으로 초기화
    int[] arr = new int[3];

    //정답을 저장할 배열
    int[] answer = new int[3];

    //키보드 입력을 위한 scanner 생성
    Scanner sc = new Scanner(System.in);


    //반복적으로 배열에 랜덤 정수 저장
    for (int i = 0; i < arr.length; i++){
      arr[i] = (int)(Math.random() * 9 + 1);

      //중복검사
      for (int j = 0; j < i; j++){
        //만약에 중복이라면...
        if (arr[i] == arr[j]) {
          i--; //i값을 1감소 -> 중복된 데이터가 발생하면 배열에 다시 넣는다
        }
      }
    }
    //배열 완성 확인
    System.out.println(Arrays.toString(arr));

    System.out.println("숫자를 정했습니다. 게임을 시작합니다.");

    int tryCnt = 0; //시도 횟수
    //정답을 맞출 때까지 게임은 끝나지 않는다.
    while(true){
      //tryCnt++; //시도 횟수 1증가

      //정답 입력존
      System.out.print(++tryCnt + " >> ");
      //처음부터 1증가시키고 시작
      answer[0] = sc.nextInt();
      answer[1] = sc.nextInt();
      answer[2] = sc.nextInt();

      //arr 배열과 answer 배열을 비교하여 스트라이크, 볼 갯수 확인
      int strike = 0; //스트라이크 갯수를 저장할 변수
      int ball = 0; //볼 갯수를 저장할 변수

      //arr에 저장된 데이터의 수만큼 반복
      for (int i = 0; i < arr.length; i++){
        for (int j = 0; j < answer.length; j++){
          //두 배열의 수가 같으면
          if (arr[i] == answer[j]) {
            //위치도 같은가?
            if (i == j){
              strike++;
            }
            else{
              ball++;
            }
          }
        }
      }

      //계산한 결과 출력
      System.out.println(strike + "S " + ball + "B");

      //3S이면 게임을 종료한다
      if (strike == 3){
        System.out.println(tryCnt + "회만에 정답을 맞췄습니다.");
        break;
      }
    }

  }
}
