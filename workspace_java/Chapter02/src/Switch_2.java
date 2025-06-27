

//점수가 90 <= x <= 100 이면 "A" 출력
//점수가 80 <= x <= 89 이면 "B" 출력
//점수가 70 <= x <= 79 이면 "C" 출력
//점수가 x < 70 이면 "D" 출력
//switch case break

public class Switch_2 {
  public static void main(String[] args) {
    int score = 100; //0~100 사이의 점수

    switch (score / 10){
      case 10: //100
      case 9: //90 ~ 99
        System.out.println("A");
        break;
      case 8:
        System.out.println("B");
        break;
      case 7:
        System.out.println("C");
        break;
      default:
        System.out.println("D");
    }

  }
}
