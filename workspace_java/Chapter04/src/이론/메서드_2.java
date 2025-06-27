package 이론;

public class 메서드_2 {
  public  static  void tellName(){
    System.out.println("이름은 홍길동입니다");
  }

  public static void main(String[] args) {
    tellAge();
    tellName();
  }

  public  static void tellAge()
  {
    System.out.println("나이는 20살입니다");
  }
}
