public class MyMath implements MathUtil {

  @Override
  public boolean isEven(int a, int b, int c) {
    int sum = a + b + c;
    /*
    if (sum % 2 == 0 && sum % 5 == 0) {
      return true;
    }
    else {
      return false;
    }
     */
    return sum % 2 == 0 && sum % 5 == 0;
  }

  @Override
  public double getSumFromOne(int num) {
    int sum = 0;
    for (int i = 1; i < num + 1; i++) {
      sum = sum + i;
    }
    return sum;
  }

  @Override
  public double getCircleArea(int rad) {
   /*
    if (rad >= 0){
      return rad * rad * Math.PI;
    }
    return 0;
  }
    */
    return rad >= 0 ? rad * rad * Math.PI : 0;
  }
  //상수 - 변하지 않는 값, 대문자로만 표기한다.
  final int NUM = 0;

}
