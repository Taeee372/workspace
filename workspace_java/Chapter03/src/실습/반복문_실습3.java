package 실습;

public class 반복문_실습3 {
  public static void main(String[] args) {

    // 방법1
//    int i = 2;
//
//    while (i < 11){
//      System.out.println(i);
//      i += 2;
//    }

    // 방법2
    // 2 3 4 5 6 7 8 9 10
    int i = 2;

    while (i < 11){
      // i가 짝수일 때 출력한다
      if (i % 2 == 0){
        System.out.println(i);
      }
      i++;

    }
  }
}
