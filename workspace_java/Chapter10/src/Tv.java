//클래스가 어떠한 클래스도 상속받고 있지 않다면
//자동으로 Object 클래스를 상속받는다.
//결론 - 자바의 모든 클래스는 Object 클래스를 상속하고 있다!
//     - 모든 클래스는 Object 클래스의 변수와 메서드를 사용할 수 있다.

//Object 클래스에서 선언된 equals()
//객체가 같음을 판단할 때는 equals() 메서드 사용 권장
//equals()메서드의 원래 기능 : 참조값(주소)이 같으면 리턴 true
//단, 객체가 같다는 정의는 여러분들이 정의해서 사용하세요.
// -> 결론 : Object 클래스의 equals()메서드를 오버라이딩해서 사용하세요!

//Object 클래스에서 선언된 toString()
//toString()메서드는 객체를 문자열로 표현할 때 사용하라고 제공하는 메서드
//toString()메서드의 원래 기능 : 객체의 주소값을 문자열로 표현
//객체명만 출력해도 자동으로 객체의 toString() 메서드가 호출된다.
class Q extends Object{
public void testQ(int a, String b){
  System.out.println("111");
  }
}

public class Tv extends Q{
  @Override //이상하게 코드 건들면 @Override에 빨간줄 그임
public void testQ(int a, String b){
  System.out.println("22");
}

  public void turnOn(){
    System.out.println("TV 전원 켬");
  }
}

//@를 annotation(어노테이션)이라 부름
//개발자의 실수를 줄이기 위해 사용하는 보조 수단
class Rect{
  int width;
  int height;

  @Override
  public String toString() {
    return "Rect{" +
            "width=" + width +
            ", height=" + height +
            '}';
  }

  @Override
  public boolean equals(Object obj) {
    return width == ((Rect)obj).width && height == ((Rect)obj).height;
  }

}
