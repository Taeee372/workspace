//아래 요구사항에 만족하는 추상메서드를 정의하고,
//StudentUtil 인터페이스를 구현하는 MyStudent 클래스를 구현하시오.
public interface StudentUtil {
  //매개변수로 전달되는 학생의 총점을 리턴
  //메서드명 : getTotalScore
  public int getTotalScore(String stu);

  //매개변수로 전달된 두 명의 학생 중
  //총점이 높은 학생을 리턴
  //메서드명 : getHighScoreStudent
  public String getHighScoreStudent(String stu);

  //학생 여러명을 매개변수로 받아, 또 다른 매개변수로 받는 학생의 이름과
  //일치하는 학생의 점수 등급을 문자열로 리턴
  //학생의 점수 등급은 총점의 평균으로 계산
  //만약, 매개변수로 받은 이름과 일치하는 학생이 없다면
  //"학생 없음"이라는 문자열 리턴
  //90 <= 평균 <= 100 -> "A"
  //80 <= 평균 <= 89 -> "B"
  //70 <= 평균 <= 79 -> "C"
  //평균 < 70 -> "D"
  //메서드명 : getGradeBy
  public String getGradeBy(int[] arr, String name);

}
