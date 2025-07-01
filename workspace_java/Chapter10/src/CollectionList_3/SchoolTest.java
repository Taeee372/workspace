package CollectionList_3;

import java.util.ArrayList;
import java.util.List;

public class SchoolTest {
  public static void main(String[] args) {
    List<Student> list1 = new ArrayList<>();
    list1.add(new Student("홍길동", 20, 80));
    list1.add(new Student("헝길동", 20, 90));
    list1.add(new Student("고길동", 20, 100));
    StudyClass studyClass1 = new StudyClass(list1, "자바반", "김자바");

    List<Student> list2 = new ArrayList<>();
    list2.add(new Student("김길동", 20, 75));
    list2.add(new Student("남궁길동", 20, 50));
    list2.add(new Student("장길동", 20, 95));
    StudyClass studyClass2 = new StudyClass(list2, "파이썬반", "김파이");

    List<Student> list3 = new ArrayList<>();
    list3.add(new Student("제갈길동", 20, 60));
    list3.add(new Student("여길동", 20, 40));
    list3.add(new Student("류길동", 20, 70));
    StudyClass studyClass3 = new StudyClass(list3, "씨쁠쁠반", "김씨쁠");

    List<StudyClass> list = new ArrayList<>();
    list.add(studyClass1);
    list.add(studyClass2);
    list.add(studyClass3);


    School school = new School(list);

  }
}
