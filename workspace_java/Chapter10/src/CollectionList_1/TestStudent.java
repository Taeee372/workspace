package CollectionList_1;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class TestStudent {
  public static void main(String[] args) {
    List<Student> stuList = new ArrayList<>();


    stuList.add(new Student("홍길동", 90, 80));
    stuList.add(new Student("헝길동", 70, 70));
    stuList.add(new Student("고길동", 100, 60));

    for (Student e : stuList){
      System.out.println(e);
    }

    System.out.println();
    for (int i = 0; i < stuList.size(); i++){
      if (stuList.get(i).getTotalScore() > 150) {
        System.out.println(stuList.get(i));
      }
    }

    System.out.println();
    int sum = 0;
    for (Student e : stuList){
      sum = sum + e.getTotalScore();
    }
    double avg = (double)sum / stuList.size();
    System.out.println(avg);

    System.out.println();
    for (Student e : stuList){
      if () {
        System.out.println(e);
      }
    }
  }


}
