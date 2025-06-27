//실행을 위한 클래스. 설계도 아님!
public class MonitorTest {
  public static void main(String[] args) {
    //모니터 설계도를 보고 모니터 객체를 생성
    //객체 생선 문법
    //클래스명 객체명 = new 클래스명();
    //new -> 새로운 객체를 생성하겠습니다

    //모니터 객체 생성
    Monitor m1 = new Monitor(); //m1이 진짜 모니터

    //객체에서 멤버변수(필드)를 접근하는 방법
    //문법 : 객체명.필드명;
    System.out.println(m1.brand);
    System.out.println(m1.price);
    System.out.println(m1.inch);

    //필드값 변경
    m1.brand = "LG";
    System.out.println(m1.brand);

    //객체의 메서드 호출방법 : 객체명.메서드호출
    m1.powerOn();
    m1.powerOff();

  }
}
