import java.security.PublicKey;

public class Exception_4 {
  public static void main(String[] args) {
    try {
      method1(7);
    } catch (Exception e) {
      System.out.println("예외발생");
    }
    System.out.println("프로그램 종료");

  }

  public static void method1(int a) throws Exception{
    method2(a, 0);
  }

  public static void method2(int a, int b) throws Exception{
    //throws ~ : ~ 를 다른 애한테 떠넘기겠다
    //ex) throws Exception : 모든 예외처리를 다른 애한테 넘기겠다
    //ex2) throws ArithmeticException : ArithmeticException만 떠넘기고 다른 건 내가 처리
    int result = a / b;
  }

}
