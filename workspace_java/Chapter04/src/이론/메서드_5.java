package 이론;

public class 메서드_5 {
  public static void main(String[] args) {
    String name = getName();
    System.out.println(name);

    int age = getAge();
    System.out.println(age);

    System.out.println(getAge());
  }

  //이름을 리턴하는 메서드
  public static String getName(){
    return "홍길동";
  }

  //나이를 리턴하는 메서드
  public static int getAge(){
    return 20;
  }
}
