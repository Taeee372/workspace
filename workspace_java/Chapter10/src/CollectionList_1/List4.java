package CollectionList_1;

import java.util.ArrayList;
import java.util.List;

public class List4 {
  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();

    for (int i = 0; i < 10; i++){
      int e = (int)(Math.random() * 100 + 1);
      list.add(e);
      System.out.print(e + " ");
    }

    int cnt = 0;
    for (int e : list){
      if (e % 2 == 0) {
        cnt++;
      }
    }
    System.out.println();
    System.out.println(cnt);

    for (int e : list){
      if (e % 2 == 0) {
        System.out.print(e + " ");
      }
    }

  }
}
