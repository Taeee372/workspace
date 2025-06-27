package 문제;

import java.util.Arrays;

public class 메서드심화_2__8 {
  public static void main(String[] args) {

    // 2번
    //test2(10);

    // 3번
    //System.out.println(test3());

    // 4번
    //System.out.println(test4(5));

    // 5번
    //int[] arr1 = {1, 2, 3, 4, 5};
    //test5(arr1);

    // 6번
    //int[] arr = {1, 50, 89, 46, 41};
    //System.out.println(test6(arr));

    // 7번
    //String[] str = {"길동이", "와", "홍길동"};
    //System.out.println(test7(str));

    // 8번
    int[] a = {1,2,3,4,5};
    int[] b = {6,7,8};
    int[] result = test8(a, b);
    System.out.println(Arrays.toString(result)); // int[] result = test8(a, b); 와 같은 말
  }

  //2번
  public static void test2(int a){
    for (int i = 1; i <= 100; i++){
      if (i % a == 0) {
        System.out.println(i);
      }
    }
  }

  //3번
  public static int test3(){
     return (int)(Math.random() * 50 + 1);
  }

  //4번
  public static boolean test4(int num){
    return num % 2 == 0;
  }

  //5번
  public static void test5(int[] arr){
    for (int e : arr){
      System.out.println(e);
    }
  }

  //6번
  public static int test6(int[] arr){
    int max = 0;
    for(int i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }

  //7번
  public static String test7(String[] str){
    String result = "";
    for (int i = 0; i < str.length; i++){
      result = result + str[i];
    }
    return result;
  }

  //8번
  public static int[] test8(int[] arr1, int[] arr2){
    int[] newArr = new int[arr1.length + arr2.length];
    for(int i = 0; i < arr1.length; i++) {
      newArr[i] = arr1[i];
    }
    for (int i = 0; i < arr2.length; i++) {
      newArr[arr1.length + i] = arr2[i];
    }
    for(int e : newArr){
          System.out.println(e);
    }
    return newArr;
  }
}
