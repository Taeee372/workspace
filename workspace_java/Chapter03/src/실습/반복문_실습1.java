package 실습;

public class 반복문_실습1 {
  public static void main(String[] args) {

    int i = 0;
    // i-> index(목차, 순서)
    // 반복문에서는 통상적으로 변수명을 i로 둔다
    // 통상적으로 시작은 0으로 둔다
    // 반복문에서 통상적으로 =을 쓰지 않는다

    while (i < 5){
      System.out.println("*");
      i++;
    }


    /// /////////////////////////////////////////////

    for(int j = 0; j < 5; j++){
      System.out.println("*");
    }

  }
}
