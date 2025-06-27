package 실습_2트;

public class 배열2_2_2트 {
  public static void main(String[] args) {
    int[] arr = {5,4,3,2,1,};
    int[] newArr = new int[5];
    for (int i = 0; i < newArr.length; i++){
      newArr[i] = arr[i];
    }
    for (int e : newArr){
      System.out.println(e);
    }

  }
}
