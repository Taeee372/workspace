import java.awt.desktop.OpenURIEvent;

//인터페이스는 사용자 정의 자료형이다.
//인터페이스의 구성요소 : 추상 메서드(내용부가 없는 메서드)만 존재
// (클래스에는 메서드, 멤버변수, 생성자 존재)
public interface Printable {
  //흑백 프린터 출력
  public void blackPrint();

  //컬러 프린터 출력
  public void colorPrint();
}
