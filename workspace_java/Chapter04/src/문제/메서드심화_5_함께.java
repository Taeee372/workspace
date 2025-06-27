package 문제;

public class 메서드심화_5_함께 {
  public static void main(String[] args) {
    int[] aaa = {1,2,3,4,5};
    printArray(aaa);
  }

  public static void printArray(int[] a){
    for (int i = 0; i < a.length; i++){
      System.out.println(a[i]);
    }
  }
}
