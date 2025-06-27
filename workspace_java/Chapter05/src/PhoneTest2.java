public class PhoneTest2 {
  public static void main(String[] args) {
    //Phone 클래스에 대한 객체 3개 생성
    Phone p1 = new Phone();
    Phone p2 = new Phone();
    Phone p3 = new Phone();

    //p1 객체에 필드들을 변경
    p1.modelName = "s1";
    p1.price = 1000;
    p1.os = "mac";

    //p2 객체의 필드 변경
    p2.setModelName("s2");
    p2.setPrice(1000);
    p2.setOs("android");

    //p3 객체의 필드 변경
    p3.setPhoneInfo("s3", 2000, "mac");

    //모든 객체의 정보 출력
    p1.printPhoneInfo();
    p2.printPhoneInfo();
    p3.printPhoneInfo();

    /*
    클래스 기초 문제
    1) 3
      1-4번 : 객체(모든 객체를 아우르는 말) == 인스턴스(하나를 콕 찍어서 지칭할 때)
      ex) p1은 Phone의 인스턴스이다. & p1, p2, p3는 Phone의 객체이다.
    2) 4 지역변수 : 메서드 안에서 정의되는 변수
    3) 3, 4
    4) 2
    5) 3
     */


  }
}
