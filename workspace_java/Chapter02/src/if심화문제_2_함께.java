import java.util.Scanner;

public class if심화문제_2_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("점 (x, y)의 좌표를 입력하시오>> ");
    int xPos = sc.nextInt();
    int yPos = sc.nextInt();

    if(xPos >= 50 && xPos <= 100 && yPos >= 50 && yPos <= 100){
      System.out.println("사각형 안에 점이 있습니다.");
    }
    else{
      System.out.println("사각형을 벗어났습니다.");
    }

  }
}
