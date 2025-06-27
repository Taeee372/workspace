import java.util.Scanner;

public class 값입력_2 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    //키보드로 두 수를 입력받아 두 수의 합을 출력
    System.out.print("첫 번째 수 입력 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 입력 : ");
    int b = sc.nextInt();
    System.out.println("키보드로 입력받은 두 수의 합 : " + (a + b));


  }
}
