import java.util.Scanner;

public class 연산자문제_10 {
  public static void main(String[] args) {
    //키보드 입력을 위한 scanner 생성
    Scanner sc = new Scanner(System.in);

    //문제 풀이를 위한 필요 변수 선언

    //이렇게 쉼표로 이어서 쓸 수도 있음
     int korScore, engScore, mathScore; //국, 영, 수 점수 저장을 위한 변수
     int totalScore; //총점 저장을 위한 변수
     double avg; //평균 데이터를 저장할 변수

    //----- 국, 영, 수 점수 입력 -----//
    System.out.print("국어점수 : ");
    //키보드로 정수를 입력받고, korScore 변수에 저장
    korScore = sc.nextInt();

    System.out.print("영어점수 : ");
    engScore = sc.nextInt();

    System.out.print("수학점수 : ");
    mathScore = sc.nextInt();

    //----- 총점 및 평균 계산 -----//
    totalScore = korScore + engScore + mathScore;
    avg = totalScore/3.0;

    //----- 총점 및 평균 출력 -----//
    System.out.println("총점 : " + totalScore);
    System.out.println("평균 : " + avg);





    //내 풀이
//    System.out.print("국어점수 : ");
//    int a = sc.nextInt();
//    System.out.print("영어점수 : ");
//    int b = sc.nextInt();
//    System.out.print("수학점수 : ");
//    int c = sc.nextInt();
//    System.out.println("총점 : " + (a + b + c));
//    System.out.println("평균 : " + (a + b + (double)c)/3);
  }
}
