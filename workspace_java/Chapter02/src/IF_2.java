import java.util.Scanner;

public class IF_2 {
  public static void main(String[] args) {
    //키보드로 정수 하나를 입력받아,
    //입력받은 정수가 짝수일 때만 "A" 문자열을 출력하세요.
    //모든 짝수는 2로 나누었을 때 나머지가 0이다.

    Scanner sc = new Scanner(System.in);
    int x;

    System.out.print("정수 입력 : ");
    x = sc.nextInt();

    //만약에 x가 짝수라면...
    //==을 =으로 적어서 계속 빨간불 뜸ㅜ "같다"를 나타낼 때는 =이 아니라 ==.... 제발 기억
     if(x % 2 ==0 ){
      System.out.println("A");
    }


  }
}
