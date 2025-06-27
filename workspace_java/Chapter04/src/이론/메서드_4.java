package 이론;

public class 메서드_4 {
  public static void main(String[] args) {
    printSum(5, 10);
    printSum(500, 100);
    tellNameAndAge("홍길동", 20);
  }

  //두 수의 합을 출력하는 기능의 메서드
  public static void printSum(int num1, int num2){
    System.out.println(num1 + num2);
  }

  //이름과 나이를 출력하는 메서드
  public static void tellNameAndAge(String name, int age){
    System.out.println("이름은 " + name);
    System.out.println("나이는 " + age);
  }
}
