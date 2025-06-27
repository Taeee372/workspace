package 이론;

public class 배열은자료형이다 {
  public static void main(String[] args) {

    int a = 10;
    int[] arr = new int[3];
    // a = arr1;
    // arr2 = a; 둘 다 불가능

    String[] arr2 = new String[3];
    // arr1 = arr2;
    // arr2 = arr1; 둘 다 불가능

    String[] arr3 = new String[10];
    arr3 = arr2; //얘는 가능

  }
}
