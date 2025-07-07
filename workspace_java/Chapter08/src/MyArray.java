public class MyArray implements ArrayUtil{
  @Override
  public int getSumOfArray(int[] arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++){
      sum = sum + arr[i];
    }
    return sum;
  }

  @Override // arr1 = {1,2,3}, arr2 = {4,5,6}
  public double getAvgArray(int[] arr1, int[] arr2) {
    /*
    int sum = 0;
    for (int i = 0; i < arr1.length; i++){
      sum = sum + arr1[i];
    }
    int sum1 = 0;
    for(int i = 0; i < arr2.length; i++){
      sum1 = sum1 + arr2[i];
    }
    double avg = (double) (sum + sum1) / (arr1.length + arr2.length);
    return avg;
     */

    return (getSumOfArray(arr1) + getSumOfArray(arr2)) / (double)(arr1.length + arr2.length);

  }

  @Override
  public int[] getArrayOfEven(int[] arr) {
    int cnt = 0;
    for (int i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        cnt++;
      }
    }
    int[] resultArr = new int[cnt];
    //resultArr에 매개변수로 전달될 배열의 요소 중 짝수만 저장한다!
    int index = 0;
    for(int i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        resultArr[index] = arr[i];
        index++;
      }
    }
    return resultArr;
  }
}
