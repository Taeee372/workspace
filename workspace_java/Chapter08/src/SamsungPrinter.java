//implements : 구현
//Printable 인터페이스에 정의한 추상 메서드를 구현해서 SamsungPrinter 클래스를 만들겠다
public class SamsungPrinter implements Printable{

  @Override
  public void blackPrint() {
    System.out.println("111");
  }

  @Override
  public void colorPrint() {
    System.out.println(222);
  }
}
