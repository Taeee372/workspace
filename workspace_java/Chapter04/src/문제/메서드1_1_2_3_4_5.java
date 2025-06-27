package 문제;

public class 메서드1_1_2_3_4_5 {
  public static void main(String[] args) {
    //hello();
    //num(5);
    //text("길동이");
    //sum2(5, 2);
    sum3(1, 2, 3);
  }

  //1번
  public static void hello(){
    System.out.println("안녕하세요");
  }

  //2번
  public static void num(int num){
    System.out.println(num);
  }

  //3번
  public static void text(String text){
    System.out.println(text);
  }

  //4번
  public static void sum2(int num1, int num2){
    System.out.println(num1 + num2);
  }

  //5번
  public static void sum3(int num1, int num2, int num3){
    System.out.println(num1 * num2 * num3);
  }

}
