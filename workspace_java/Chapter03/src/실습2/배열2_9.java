package 실습2;

public class 배열2_9 {
  public static void main(String[] args) {
    int[] lotto = new int[6];

    for (int i = 0; i < lotto.length; i++){
      int rand = (int)(Math.random() * 45 + 1);
      lotto[i] = rand;
      for(int j = 0; j < i; j++){
        if (lotto[j] == rand) {
          i--;
          break;
        }
      }
    }


    for (int e : lotto){
      System.out.print(e + " ");
    }
  }
}
