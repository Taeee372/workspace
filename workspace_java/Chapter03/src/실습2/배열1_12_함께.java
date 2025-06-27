package 실습2;

import java.util.Scanner;

public class 배열1_12_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //0: 국어점수, 1: 영어점수, 2: 수학점수, 3: 총점
    int[] scores = new int[4];

    String[] subjects = {"국어", "영어", "수학"};

    //평균
    double avg;

    //----- 점수 입력-----//
    /* for문의 무한루프
        for (;;){

        }
    */

    for (int i = 0; i < scores.length - 1; i++){
      while (true){
        System.out.print(subjects[i] + "점수 : ");
        scores[i] = sc.nextInt();

        if (scores[i] >= 0 && scores[i] <= 100) {
          break;
        }
      }
    }

    //총점 및 평균 계산
    for (int i = 0; i < scores.length - 1; i++){
      scores[scores.length - 1] = scores[scores.length - 1] + scores[i];
    }
    //이까지 총점 끝

    //평균
    avg = scores[scores.length - 1] / (double)subjects.length;

    //각 과목의 점수, 총점, 평균 출력
    for (int i = 0; i < subjects.length; i++){
      System.out.println(subjects[i] + "점수 - " + scores[i]);
    }
    System.out.println("총점 - " + scores[scores.length - 1]);
    System.out.println("평균 - " + avg);


  }
}
