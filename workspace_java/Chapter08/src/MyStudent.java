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
  public String getGradeBy(Student[] students, Student name) {
    Student[] subjects = new Student[3];
    for (int i = 0; i < students.length; i++){
      if (students[i].equals(name)) {
        double avg = (double) getTotalScore(name) / subjects.length;
        if (90 <= avg && avg <= 100) {
          return "A";
        }
        else if (80 <= avg && avg <= 89) {
          return "B";
        }
        else if (70 <= avg && avg <= 79) {
          return "C";
        }
        else return "D";
      }
    }
    return "학생 없음";
  }
}