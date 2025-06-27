package apple;

//접근제한자 : 변수나 메서드의 사용 범위를 지정하는 문법
//접근제한자 종류 : private < default < protected < public  우측으로 갈수록 사용 범위가 넓어진다

//private : 변수, 메서드를 선언한 클래스 내에서만 접근 가능 ☆
//default : 같은 패키지 내에서만 접근 가능
//public : 같은 프로젝트 내의 모든 곳에서 사용 가능

//멤버변수는 무조건 private 붙이세요!  ☆
//메서드는 무조건 public 사용!  ☆

//지역변수에는 접근제한자 사용 못 함 | 멤버변수.메서드에만 사용 가능
//클래스에는 public, default만 사용 가능!

public class Apple {
  String newData;
  int newInt;
  public String name;
  private int price;
  double avg; //default는 앞에 붙이지 않음 | 아무것도 쓰지 않은 게 이미 default 상태

  public void aaa(){}
  private void bbb(){}
  void ccc(){}

  public void setPrice(int price){
    this.price = price < 0 ? 0 : price;
  }
}
