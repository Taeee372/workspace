//아래 제공하는 ArrayUtil 인터페이스를 구현하는  MyArray 클래스를 구현하시오.
public interface ArrayUtil {

  //매개변수로 전달되는 배열의 모든 요소의 합을 리턴
  public int getSumOfArray(int[] arr);

  //매개변수로 전달되는 두 배열의 모든 요소의 평균을 리턴
  public double getAvgArray(int[] arr1, int[] arr2);

  //매개변수로 전달되는 배열에서 짝수만을 요소로 갖는 배열을 리턴
  public int[] getArrayOfEven(int[] arr);
}
