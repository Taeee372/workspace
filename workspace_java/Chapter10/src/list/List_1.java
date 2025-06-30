package list;

import java.util.ArrayList;
import java.util.List;

public class List_1 {
  public static void main(String[] args) {

    //List : 순번이 존재하고, 중복 데이터를 저장할 수 있는 통!

    //List에는 기본 자료형 사용 못 함.
    //기본 자료형 대신 Wrapper 클래스를 사용한다.
    //Wrapper 클래스 -> 기본 자료형을 클래스 형태로 만든 것.

    //boolean -> Boolean
    //char -> Character
    //byte -> Byte
    //short -> Short
    //int -> Integer
    //long -> Long
    //float -> Float

    //List 생성, 문자열을 여러개 저장할 수 있는 통, 크기는 저장된 데이터만큼 알아서 변경
    List<String> list = new ArrayList<>();

    //list에 데이터를 저장하는 메서드
    list.add("java");
    list.add("c++");
    list.add("python");
    list.add("python");

    String a = list.get(0);
    System.out.println(a);

    list.remove(0);
    System.out.println(list.get(0));
    //System.out.println(list.get(3)); 하나 없어져서 한 칸씩 땡겨졌으니 현재 3번째 칸은 존재하지 않음 so 에러뜬다

    System.out.println(list.size()); //length와 같은 역할




    //정수를 여러개 저장할 수 있는 List 통
    List<Integer> list1 = new ArrayList<>();
    list1.add(5);
    list1.add(10);

    //실수를 여러개 저장할 수 있는 List 통
    List<Double> list2 = new ArrayList<>();
  }
}
