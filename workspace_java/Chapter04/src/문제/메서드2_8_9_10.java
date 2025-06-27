package 문제;

public class 메서드2_8_9_10 {
  public static void main(String[] args) {

    /* 8번
    double avg = test8(1, 3, 3);
    System.out.println(avg);
     */

    /* 9번
    int sum = test9(10);
    System.out.println(sum);
     */

    // 10번
    boolean a = test10("홍길동과 고길동");
    System.out.println(a);


  }

  // 8번
  public static double test8(int a, int b, int c){
    return ((double) a + b + c) / 3;
  }

  //9번
  public static int test9(int a){
    int sum = 0;
    for (int i = 1; i < a + 1; i++){
      if (i % 2 == 1) {
        sum = sum + i;
      }
    }
    return sum;
  }

  //10번
  //문자열.length() -> 문자열의 길이를 리턴.
  public static boolean test10(String a){
    // return a.length() % 2 == 0 ? true : false;
    return a.length() % 2 == 0; // 최종 줄임본
    // -> 어차피 비교 연산자의 실행 결과는 true, false의 값을 가지기 때문에

    /* 위의 내용을 풀어쓴 것
    if (name.length() % 2 == 0){
      return "true";
    }
    else {
      return "false";
    }
     */
  }

}
