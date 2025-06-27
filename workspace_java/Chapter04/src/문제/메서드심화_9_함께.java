package 문제;

import java.util.Arrays;

public class 메서드심화_9_함께 {
  public static void main(String[] args) {

    int[] arr = {1, 5, 2, 7, 8, 9, 4, 3, 10};
    int[] result = test9(arr);
    System.out.println(Arrays.toString(result));
  }

  public static int[] test9(int[] arr){
    //매개변수로 들어온 배열의 짝수의 갯수를 구함
    int evenCnt = 0;

    for(int i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        evenCnt++;
      }
    }

    //짝수의 갯수만큼의 공간을 갖는 배열을 생성
    int[] resultArr = new int[evenCnt];

    //새로 생성한 배열에 매개변수로 들어온 배열 요소 중 짝수만 저장한다.
    int index = 0; //arr[i]와 별개로 움직일 resultArr[]에 들어가는 값
    for (int i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        resultArr[index] = arr[i];
        index++;

      //  resultArr[index++] = arr[i]; //위의 두 줄과 같은 말
      //  resultArr[++index] = arr[i]; //얜 먼저 1을 증가시켜버려서 안됨 (0번째 자리를 넣을 수 없다)
      }
    }

    //배열을 리턴한다.
    return resultArr;
  }

}
