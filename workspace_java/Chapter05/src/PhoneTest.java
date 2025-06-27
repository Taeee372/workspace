public class PhoneTest {
  public static void main(String[] args) {
    //클래스명 객체명 = new 클래스명();

    //Phone 클래스에 대한 객체 p1을 생성
    Phone p1 = new Phone();

    //p1 객체의 모델명을 출력
    System.out.println(p1.modelName);

    //p1 객체의 모델명, 가격, os 정보를 출력
    p1.printPhoneInfo();

    //p1 객체의 가격을 1000원으로 변경
    p1.price = 1000;
    p1.setPrice(1000);
  }
}
