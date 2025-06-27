package 실습;

public class 반복문_break_문제_4 {
  public static void main(String[] args) {

    int sum = 0;
    for (int i = 1; i < 50; i++){
      sum = sum + i;
      if (sum > 50) {
        System.out.println(sum);
        System.out.println(i);
        break;
      }
    }
  }
}
