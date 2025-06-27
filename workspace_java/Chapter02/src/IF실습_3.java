import java.util.Scanner;

public class IF실습_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a, b;

    System.out.print("a : ");
    a = sc.nextInt();
    System.out.print("b : ");
    b = sc.nextInt();

    if(a > b){
      System.out.println("a가 큽니다.");
    }
    else if (b > a) {
      System.out.println("b가 큽니다.");
    }
    else{
      System.out.println("같습니다.");
    }

  }
}
