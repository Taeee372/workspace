package 실습;

public class 반복문_실습7 {
  public static void main(String[] args) {

    int i = 1;
    while (i < 101){
      if (i % 5 == 0){
        System.out.print(i + " ");
      }
      i++;
    }

    int k = 1;
    int cnt = 0;
    while (k < 101){
      if (k % 5 == 0){
        cnt++;
      }
      k++;
    }
    System.out.println();
    System.out.println("5의 배수의 갯수 : " + cnt);
  }
}
