package 실습;

public class 반복문_실습6_for {
  public static void main(String[] args) {

    int cnt = 0;

    for (int i = 1; i < 101; i++){
      if (i % 3 == 0){
        cnt++;
      }
    }
    System.out.println(cnt);
  }
}
