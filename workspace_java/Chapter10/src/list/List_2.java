package list;

import java.util.ArrayList;
import java.util.List;

public class List_2 {
  public static void main(String[] args) {
    //정수를 다수 저장할 수 있는 List 생성
    List<Integer> list = new ArrayList<>();

    list.add(1);
    list.add(3);
    list.add(5);

    //list에 저장된 모든 데이터를 for문을 이용해서 출력하세요
    for (int i = 0; i < list.size(); i++){
      System.out.println(list.get(i));
    }
  }
}
