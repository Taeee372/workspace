package CollectionList_1;

import java.util.ArrayList;
import java.util.List;

public class TestMember {
  public static void main(String[] args) {
    List<Member> list = new ArrayList<>();

    list.add(new Member("hong", "123", "홍길동", 10));
    list.add(new Member("hung", "1234", "헝길동", 20));
    list.add(new Member("java", "12345", "홍자바", 30));

    for (Member e : list){
      System.out.println(e);
    }

    int sum = 0;
    for (Member e : list){
      sum = sum + e.getAge();
    }
    System.out.println(sum);

    for(int i = 0; i < list.size(); i++){
      if (list.get(i).getId().equals("java")) {
        list.remove(i);
      }
      else {
        System.out.println(list.get(i));
      }
    }

  }
}
