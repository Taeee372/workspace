package 실습_2트;

public class 배열1_11_2트 {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5,6,7,8};

    int cnt = 0;
    for (int i = 0; i < arr.length; i++){
      if (i % 2 == 0) {
        cnt++;
      }
    }
    System.out.println(cnt);
  }
}
