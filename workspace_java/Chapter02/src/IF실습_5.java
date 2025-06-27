import java.util.Scanner;

public class IF실습_5 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    int num;

    System.out.print("0~100 숫자 입력 : ");
    num = sc.nextInt();

    //학점(A, B, C) 데이터를 저장하는 변수
    String grade = "";

    if(num > 90 && num <= 100){
//      System.out.println("학점은 A입니다.");
      grade = "A";
    }
    else if (num > 80 && num<= 90) { //어차피 90보다 큰 점수는 위에서 걸러지니 && num<=90은 필요없다.
//      System.out.println("학점은 B입니다.");
      grade = "B";
    }
    else{
//      System.out.println("학점은 C입니다.");
      grade = "C";
    }
    System.out.println("학점은 " + grade + "입니다.");
  }
}
