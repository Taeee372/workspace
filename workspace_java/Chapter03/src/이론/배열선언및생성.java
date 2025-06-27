package 이론;

public class 배열선언및생성 {
  public static void main(String[] args) {
    //배열 선언 문법
    // 자료형[] 변수명;

    //정수를 여러개 저장할 수 있는 배열 arr1을 선언
    int[] arr1;
    //arr1 배열을 정수가 3개 저장될 수 있는 공간으로 생성
    arr1 = new int[3];


    //문자열을 여러개 저장할 수 있는 배열 arr2를 선언
    String[] arr2;
    //arr2 배열을 문자열 5개 저장될 수 있는 공간으로 생성
    arr2 = new String[5];

    double[] arr3;
    arr3 = new double[3];

    //배열의 선언과 생성을 동시에!
    int[] arr4 = new int[4];

  }
}
