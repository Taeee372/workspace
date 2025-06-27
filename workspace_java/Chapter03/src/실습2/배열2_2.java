package 실습2;

public class 배열2_2 {
  public static void main(String[] args) {
    int[] arr = {5, 4, 3, 2, 1};
    int[] newArr = new int[5];
//    for (int i = 0; i < newArr.length; i++){
//    newArr[i] = arr[i];
//      System.out.println(newArr[i]);
//    }

    //얘도 가능은 함
    newArr = arr;
    for (int e : newArr)
    System.out.println(e);
  }
}
