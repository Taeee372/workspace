import javax.sound.midi.Soundbank;
import java.util.Scanner;

public class IF_3 {
  public static void main(String[] args) {
    //키보드로 정수 두 개를 입력받아,
    //두 정수의 합이 10 이상이면 "합이 10 이상입니다"를 출력

    Scanner sc = new Scanner(System.in);

    //키보드로 입력받은 두 정수를 저장할 변수
    int num1;
    int num2;

    //키보드로 두 정수 입력
    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    //만약에 입력받은 두 수의 합이 10 이상이면...
    if(num1 + num2 > 10){
      System.out.println("합이 10 이상입니다");
    }

  }
}
