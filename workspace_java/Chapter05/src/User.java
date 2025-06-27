public class User {
  private int userNum; //회원번호
  private String name;
  private int age;

  public User(int userNum, String name, int age) {
    this.userNum = userNum;
    this.name = name;
    this.age = age;
  }

  public int getUserNum() {
    return userNum;
  }

  public void setUserNum(int userNum) {
    this.userNum = userNum;
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

  public void display(){
    System.out.println("회원번호 : " + userNum);
    System.out.println("이름 : " + name);
    System.out.println("나이: " + age);
  }
}
