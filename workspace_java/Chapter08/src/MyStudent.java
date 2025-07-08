public class MyStudent implements StudentUtil {
  @Override
  public int getTotalScore(Student stu) {
    int total = stu.getKorScore() + stu.getEngScore() + stu.getMathScore();
    return total;
  }

  @Override
  public Student getHighScoreStudent(Student stu1, Student stu2) {
    int total1 = getTotalScore(stu1);
    int total2 = getTotalScore(stu2);
    return total1 > total2 ? stu1 : stu2;
  }

  @Override
  public String getGradeByStudentName(Student[] students, String name) {
    Student[] subjects = new Student[3];
    String grade = "학생 없음"; //학생의 등급을 저장할 변수
    for (Student e : students){
      if (e.getName().equals(name)) {
        double avg = (double) getTotalScore(e) / subjects.length;
        grade = getGradeByAvg(avg);
      }
    }
    return grade;
  }

  //평균으로 등급을 결정하는 메서드
  public String getGradeByAvg(double avg){
    String grade = "";
    if (avg >= 90) {
      grade = "A";
    }
    else if (avg >= 80) {
      grade = "B";
    }
    else if (avg >= 70) {
      grade = "C";
    }
    else grade = "D";

    return grade;
  }

}