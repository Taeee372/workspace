package test;

public class Member_2 {
  private String id;
  private String pw;
  private String name;
  private int age;

  public void setInfo(String id, String pw, String name, int age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
  }

  public void showInfo(){
    System.out.println("아이디 : " + id + " 패스워드 : " + pw + " 이름 : " + name + " 나이 : " + age);
  }

  public boolean isLogin(String id, String pw){
    return this.id.equals(id) && this.pw.equals(pw) ? true : false;
  }
}
