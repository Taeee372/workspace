package 실습2;

public class 배열2_7_함께 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    //배열의 크기만큼 1~100 사이의 랜덤한 정수를 반복해서 저장
    for (int i = 0; i < arr.length; i++){
      arr[i] = (int)(Math.random() * 100 + 1);

      // int num = (int)(Math.random() * 100 + 1);
      // arr[i] = num; ->위의 한 줄을 두 줄로 풀어쓴 것
    }

    //랜덤 데이터 저장 확인
    for(int e : arr){
      System.out.print(e + " ");
    }
    System.out.println(" ");

    //배열의 가장 큰 값을 저장할 변수
    int max = arr[0];
    //배열의 가장 작은 값을 저장할 변수
    int min = arr[0];

    //max, min 값 구하기
    //0은 이미 기본값이니 1부터 시작해도 됨
    for (int i = 0; i < arr.length; i++){
      if (max < arr[i]) {
        max = arr[i];
      }
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    System.out.println("최대값 : " + max);
    System.out.println("최소값 : " + min);
  }
}
