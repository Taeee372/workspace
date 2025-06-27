import jdk.jshell.SourceCodeAnalysis;

public class Student {
  private String name;
  private  int age;
  private String tel;
  private String grade;

  public Student(String name, int age, String tel, String grade) {
    this.name = name;
    this.age = age;
    this.tel = tel;
    this.grade = grade;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public String getGrade() {
    return grade;
  }

  public void setGrade(String grade) {
    this.grade = grade;
  }

  public void display(){
    System.out.print("이름 : " + name + ", ");
    System.out.print("나이 : " + age + ", ");
    System.out.print("연락처 : " + tel + ", ");
    System.out.print("학점 : " + grade);
  }
}
