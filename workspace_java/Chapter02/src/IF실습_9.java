import java.util.Scanner;

public class IF실습_9 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num1, num2;

    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    //min : 작은 값을 저장할 변수
    //max : 큰 값을 저장할 변수
    int min, max;

    //num1이 num2보다 큰 경우를 가정
    if (num1 > num2){
//      System.out.println(num1 + ">" + num2);
      max = num1;
      min = num2;
    }
    //num2가 num1보다 큰 경우룰 가정
    else{
//      System.out.println(num2 + ">" + num1);
      max = num2;
      min = num1;
    }
    System.out.println(max + " > " + min);
  }
}
