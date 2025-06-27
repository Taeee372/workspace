package 실습;

public class 반복문_실습7_for {
  public static void main(String[] args) {

    for (int i = 1; i < 101;i++){
      if (i % 5 == 0){
        System.out.println(i);
      }
    }

    int cnt = 0;
    for (int j = 1; j < 101; j++){
      if (j % 5 == 0){
        cnt++;
      }
    }
    System.out.println(cnt);

  }
}
