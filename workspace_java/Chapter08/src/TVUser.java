import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TVUser {
  public static void main(String[] args) {
    //삼성티비 설치
    //인터페이스는 인터페이스 만으로는 객체 생성 불가!
    //단, 인터페이스를 구현한 클래스의 생성자 호출을 통해 인터페이스 객체 생성 가능!
    TV tv = new LGTV();
    tv.turnOn();
    tv.volumeUp();
    tv.volumeDown();
    tv.turnOff();

    //원래 전부 바꿨어야 했는데, 이제는 객체 생성할 때 생성자명만 바꾸면 됨!
    //클래스명은 인터페이스명
    //LGTV로 변경하고 싶으면 SamsungTV -> LGTV로 바꿔주면 됨




    ArrayUtil my = new MyArray();
    int[] a = {1,2,3};
    int[] b = {4,8,6,5,7};
    System.out.println(my.getSumOfArray(a));

    System.out.println(my.getAvgArray(a, b));

    int[] result3 = my.getArrayOfEven(b);
    System.out.println(Arrays.toString(result3));


    StudentUtil stu = new MyStudent();
    Student s1 = new Student();
    s1.setName("홍길동");
    s1.setKorScore(50);
    s1.setEngScore(80);
    s1.setMathScore(60);

    Student s2 = new Student();
    s2.setName("고길동");
    s2.setKorScore(80);
    s2.setEngScore(90);
    s2.setMathScore(100);

    Student s3 = new Student();
    s3.setName("헝길동");
    s3.setKorScore(80);
    s3.setEngScore(90);
    s3.setMathScore(100);

    Student[] students = {s1, s2};

    System.out.println(stu.getTotalScore(s2));

    System.out.println(stu.getHighScoreStudent(s1, s2).getName());

    //System.out.println(stu.getGradeByStudentName(students, s1));
  }


}
