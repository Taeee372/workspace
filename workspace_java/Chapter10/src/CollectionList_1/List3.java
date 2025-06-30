package CollectionList_1;

import java.util.ArrayList;
import java.util.List;

public class List3 {
  public static void main(String[] args) {
    List<String> name = new ArrayList<>();

    name.add("홍길동");
    name.add("고길동");
    name.add("장길동");
    name.add("헝길동");

    for (int i = 0; i < name.size(); i++){
      if (name.get(i).equals("홍길동")) {
        System.out.println("해당 이름이 존재합니다.");
      }
    }
  }
}
