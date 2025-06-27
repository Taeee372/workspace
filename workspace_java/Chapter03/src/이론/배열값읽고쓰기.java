package 이론;

public class 배열값읽고쓰기 {
  public static void main(String[] args) {
    //배열의 값을 읽을 때는 배열명을 출력해서는 안 됨!!!
    //배열에 저장된 값을 읽을 때는 배열의 요소까지 작성해야 함

    //1, 3, 5로 초기화된 데이터를 갖는 배열 arr1 생성
    int[] arr1 = {1, 3, 5};
    System.out.println(arr1);
    System.out.println(arr1[0]);

    int[] arr2 = new int[3];
    System.out.println(arr2);
    System.out.println(arr2[2]);

    // System.out.println(arr2[3]); 배열 범위 벗어남!

    String[] arr3 = new String[5];
    System.out.println(arr3[0]);

    //배열의 값을 변경, 등록할 때도 배열의 각 요소로 접근해야 넣어진다.
    arr3[0] = "java";
    System.out.println(arr3[0]);


  }
}
