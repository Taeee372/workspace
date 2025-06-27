import java.sql.SQLOutput;
import java.util.Scanner;

public class CalTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    Calculator cal = new Calculator();

    System.out.print("첫 번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int b = sc.nextInt();
    System.out.print("연산자 : ");
    String oper = sc.next();

    //cal 객체가 가진 num1과 num2 변수에 키보드로 입력받은 값을 저장시켜야 한다!
    //cal.num1 = a;
    //cal.num2 = b; 가능은 하지만 쓰지 않는다
    cal.setNum(a, b);

    switch (oper){
      case "+" :
        System.out.println(a + oper + b + " = " + cal.getSum());
        break;
      case "-" :
        System.out.println(a + oper + b + " = " + cal.getSub());
        break;
      case "*" :
        System.out.println(a + oper + b + " = " + cal.getMulti());
        break;
      case "/" :
        System.out.println(a + oper + b + " = " + cal.getDiv());
    }

  }
}
