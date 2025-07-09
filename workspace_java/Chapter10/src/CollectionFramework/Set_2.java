package CollectionFramework;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class Set_2 {
  public static void main(String[] args) {
    //HashSet<Integer> lotto = new HashSet<>(); 인터페이스명으로도 생성할 수 있다
    Set<Integer> lotto = new TreeSet<>();

    //6번 반복해서 랜덤한 수를 lotto에 저장
    while(true){
      int num = (int)(Math.random() * 45 + 1);
      lotto.add(num);

      if (lotto.size() >= 6) {
        break;
      }
    }

    //lotto 데이터 확인
    for(int e : lotto){
      System.out.print(e + " ");
    }

  }
}
