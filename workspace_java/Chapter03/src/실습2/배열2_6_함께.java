package 실습2;

public class 배열2_6_함께 {
  public static void main(String[] args) {
    int max = 0;
    int[] array = {1, 5, 3, 8, 2};

    //배열의 크기만큼 반복한다
    //반복하면서 max의 값과 배열의 각 요소의 값의 크기를 비교
    //배열의 각 요소의 값이 max보다 크다면 배열 요소의 값을 max에 저장한다.

    for (int i = 0; i < array.length; i++){
      if (max < array[i]) {
        max = array[i];
      }

    }

    System.out.println("max = " + max);
  }
}
