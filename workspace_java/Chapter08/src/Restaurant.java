interface Cookable{
  public void cook();
}

public class Restaurant {
  private String name;
  private Cookable chef;

  //interface를 적용해도 객체 생성 문법 때문에 무조건 결합도가 발생
  //결론 : 객체 생성 문법을 사용하니 어쩔 수 없이 결합도가 생기네?
  //-> 객체 생성 문법 사용하지 마세욘
  //-> 그럼 객체 어케 씀?
  //-> 스프링이 만들어 줄겁니다.
  //이게 IOC 개념
  //IOC - 제어의 역전(객체를 만드는 주체가 역전되었다, 개발자<->스프링)

  //영업중...
  public void open(){
    chef.cook();
  }


}
