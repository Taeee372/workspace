//모니터 설계도
//데이터(변수로 표현) : inch, 색상, 가격, 브랜드
//기능(메서드로 표현) : 전원 on 기능, 전원 off 기능...

//클래스의 구성요소(클래스에 들어올 수 있는 것) - 멤버변수(필드), 메서드의 정의, 생성자
//클래스 안에서 선언한 변수를 멤버변수(필드)라고 부른다.
//   변수의 종류 : 멤버변수, 지역변수, 매개변수
//      지역변수 : 반드시 초기화해야 사용 가능!, 메서드 안에서 선언
//      멤버변수 : 초기화하지 않으면 기본값으로 초기화가 자동 진행, 클래스 안에서 선언
//                 (int - 0, double - 0.0, String - null)

public class Monitor {
  String brand;
  int price;
  String color;
  double inch;

  //전원 on 기능
  public void powerOn(){
    System.out.println("모니터 전원 켬");
  }
  //전원 off 기능
  public void powerOff(){
    System.out.println("모니터 전원 끔");
  }

}
