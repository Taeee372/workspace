package 실습2;

public class 배열1_8 {
  public static void main(String[] args) {
    int[] arr = new int[10];
    //배열의 각 요소에 1~10까지 데이터를 저장
    for (int i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }
    //배열의 각 요소를 출력
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }
}

// 얘도 가능
//  for (int i = 0; i < arr.length; i++) {
//      arr[i] = i + 1;
//  System.out.println(arr[i]);
//    }
