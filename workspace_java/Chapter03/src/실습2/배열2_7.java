package 실습2;

public class 배열2_7 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    int max = arr[0];
    int min = arr[0];

    for (int i = 0; i < arr.length; i++){
      arr[i] = (int)((Math.random() * 100) + 1);
      System.out.print(arr[i] + " ");
    }

    for (int i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    System.out.println(" ");
    System.out.println("최소값: " + min);

    for (int i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    System.out.println(" ");
    System.out.println("최대값: " + max);
  }
}
