import java.util.Scanner;

public class 값입력_3 {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.print("이름 입력 : ");
    String name = sc.next();
    System.out.print("주소 입력 : ");
    String address = sc.next();

    System.out.println("입력한 이름 : " + name);
    System.out.println("입력한 주소 : " + address);




  }
}
