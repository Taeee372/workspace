//모든 클래스에 상속을 적용할 수 있을까?
//IS-A 조건을 만족하는 두 클래스는 상속을 적용시킬 수 있다.
//과일클래스, 사과클래스
//과일은 사과다.
//사과는 과일이다.

public class MobilePhone {
  public void sendMsg(){
    System.out.println("문자 전송");
  }
}

class SmartPhone extends MobilePhone{
  public void playApp(){
    System.out.println("앱을 실행합니다");
  }
}
