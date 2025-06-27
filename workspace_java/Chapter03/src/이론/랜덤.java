package 이론;

public class 랜덤 {
  public static void main(String[] args) {
    // 원래 정의 : 0 <= x < 1 사이의 랜덤한 실수를 반환
    // 50 < = x <100 사이의 랜덤한 정수
    int r = (int)((Math.random() + 1) * 50);
    System.out.println(r);

    // int bbb = (int)Math.random();
    // -> 0과 1 사이의 정수이므로 math 바로 앞에 (int)를 넣으면
    // 0.x가 되어 결과값이 무조건 0밖에 안 나옴

    // 0 <= x < 1
    // 1 <= x < 2
    // 50 <= x < 100


  }
}
