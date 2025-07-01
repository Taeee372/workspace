package CollectionList_1_2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class List2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    List<Integer> list = new ArrayList<>();

    //scanner 사용해서 입력받은 데이터를 list에 저장
    for(int i = 0; i < 5; i++){
      System.out.print("정수를 입력하세요 : ");
      int num = sc.nextByte();
      list.add(num);
    }

    //list에 저장된 모든 데이터릐 합 출력
    int sum = 0;
    for(int e : list){
      sum = sum + e;
    }
    System.out.println(sum);

    /*
    int sum = 0;
    for (int i = 0; i < list.size(); i++){
      sum = sum + i;
    }
    System.out.println(sum);
     */
  }
}
