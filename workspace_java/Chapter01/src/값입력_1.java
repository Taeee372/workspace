import java.util.Scanner;

public class 값입력_1 {
  public static void main(String[] args) {
    //키보드 값 읽기
    //1. Scanner 객체 생성
    Scanner sc = new Scanner(System.in);

    //2. 키보드로 값 읽기
    System.out.println("숫자 입력 : ");
    //정수 하나를 입력받아 a에 저장
    int a = sc.nextInt();
    System.out.println(a);


  }
}
