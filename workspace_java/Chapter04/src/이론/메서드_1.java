package 이론;

// 자바 코드는 >>main 메서드<<의 첫 줄부터 마지막 줄을 차례로 실행!
public class 메서드_1 {
  public static void main(String[] args) {
    System.out.println("시작");
    hello();
    hello();
    System.out.println("종료");
  }

  //"안녕" 문자열을 출력하는 기능을 가진 메서드를 정의
  // void : 결과(리턴) 데이터가 없다는 것을 나타내줌
  //단순한 출력은 데이터가 아니다! -> 결과(리턴) 데이터가 아님
  public static void hello(){
    System.out.println("안녕");
  }

}
