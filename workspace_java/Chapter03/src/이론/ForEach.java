package 이론;

//For-each문은 배열의 모든 내용을 반복할 때 아주 많이 사용됨!
//For-each는 또 다른 for문이다.
public class ForEach {
  public static void main(String[] args) {
    double[] arr1 = {1.1, 2.2, 3.3};

    for(int i = 0; i < arr1.length; i++){
      System.out.println(arr1[i]);
    }

    //for(하나씩 꺼낸 데이터를 저장할 변수 : 반복 돌릴 배열)
    for ( double e : arr1) { //for-each에서는 each 줄임말로 e를 많이 씀
      System.out.println(e);

    }
    String[] arr2 = {"홍길동", "이순신"};
    for (String e : arr2) {
      System.out.println(e);
    }
  }
}
