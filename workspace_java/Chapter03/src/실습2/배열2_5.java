package 실습2;

public class 배열2_5 {
  public static void main(String[] args) {
    int[] lotto = new int[6];
    for (int i = 0; i < lotto.length;i ++){
      int r = (int)(Math.random() * 45 +1);
      lotto[i] = r;
      System.out.println(lotto[i]);
    }
    }
  }
