package CollectionFramework;

import java.util.TreeSet;

public class Set_1 {
  public static void main(String[] args) {
    //다수의 문자열을 저장할 통 (순서 x, 중복데이터 저장 x)
    TreeSet<String> set = new TreeSet<>();
    set.add("java");
    set.add("python");
    set.add("c++");
    set.add("c++"); //중복데이터를 넣어도 오류가 나는 건 아니다. 그냥 무시함(결과적으로 c++은 하나만 들어간다.)

    System.out.println(set.size());

    for(String e : set){
      //Set : 순서(순번)가 없기 때문에 for문 사용 불가, for-each문만 사용 가능
      //데이터를 하나씩 뽑는 게 굉장히 어렵다. 내가 입력한 순서대로 나오지도 않음...
      System.out.println(e);
    }
    //TreeSet : 오름차순으로 정렬돼서 나온다



  }
}
