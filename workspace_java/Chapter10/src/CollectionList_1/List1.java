package CollectionList_1;

import java.util.ArrayList;
import java.util.List;

public class List1 {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();

    list.add("java");
    list.add("ja");
    list.add("va");

    for (String e : list){
      System.out.println(e);
    }
  }
}
