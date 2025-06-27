package 이론;

public class 메서드_6 {
  public static void main(String[] args) {
  int sum  = getSum(100, 200);
    System.out.println(sum);
    System.out.println(getAvg(10, 20));
  }

  //매개변수로 전달받은 두 정수의 합을 리턴
  public static int getSum(int a, int b){
    int sum = a + b;
    return sum;
    //리턴 키워드는 무조건 메서드의 마지막에 작성하며, 한 번만 실행 가능하다.
    //한 번만 실행 가능하다는 거지 한 개만 작성할 수 있다는 게 아니다.
  }

  //매개변수로 전달받은 두 정수의 평균을 리턴
  public static double getAvg(int a, int b){
    //double avg = (a + b) / 2.0; //1번
    double avg = getSum(a, b) / 2.0; //메인이 아닌 곳에서도 호출 가능
    return avg;
  }

}
/*
변수의 사용 영역(변수의 scope)
- 변수는 해당 변수가 선언된 중괄호 안에서만 사용 가능
 */
