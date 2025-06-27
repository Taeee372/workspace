//학생 한 명의 정보를 저장하는 자료형
public class Stu {

  private int stuNum;
  private String name;
  private int korScore;
  private int engScore;

  //모든 변수의 값을 변경할 수 있는 생성자

  public Stu(int stuNum, String name, int korScore, int engScore) {
    this.stuNum = stuNum;
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
  }

  //getter, setter

  public int getStuNum() {
    return stuNum;
  }

  public void setStuNum(int stuNum) {
    this.stuNum = stuNum;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getKorScore() {
    return korScore;
  }

  public void setKorScore(int korScore) {
    this.korScore = korScore;
  }

  public int getEngScore() {
    return engScore;
  }

  public void setEngScore(int engScore) {
    this.engScore = engScore;
  }

  //모든 변수의 값을 출력하는 display() 메서드
  public void display(){
    System.out.println("학번 : " + stuNum);
    System.out.println("이름 : " + name);
    System.out.println("국어점수 : " + korScore);
    System.out.println("영어점수 : " + engScore);
  }
}
