package 실습2;

public class 배열1_11_함께 {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};

    //for문
    int cnt = 0;
    for(int i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        cnt++;
      }
    }
    System.out.println(cnt);

    //for-each문
    int count = 0;
    for (int e : arr){
      if (e % 2 == 0) {
        count++;
      }
    }
    System.out.println(count);
  }
}
