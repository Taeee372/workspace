package 이론;

public class 메서드_3 {
  public static void main(String[] args) {
    tellNum(5);
    tellNum(10);
    // tellNum("hi");
    // tellNum(10.5); 둘 다 자료형이 정수가 아니므로 불가능
  }

  //정수를 출력하는 기능의 메서드
  //변수명은 중요하지 않다!! 자료형이 중요
  public static void tellNum(int num){
    //위에서 10을 넣으면 int num = 10; 의 형태가 되어 10이 출력되는 것
    System.out.println(num);
  }

}
