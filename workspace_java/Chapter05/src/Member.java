// 9번
public class Member {
  String name;
  String id;
  String password;
  int age;

  public void setName(String newName){
    name = newName;
  }

  public void setId(String newId){
    id = newId;
  }

  public void setPassword(String newPassword){
    password = newPassword;
  }

  public void setAge(int newAge){
    age = newAge;
  }

  // 10번
  public void setMemberInfo(String newName, String newId, String newPassword, int newAge){
    name = newName;
    id = newId;
    password = newPassword;
    age = newAge;
  }

  //11번
  public void printMemberInfo(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + password);
    System.out.println("나이 : " + age);
  }
}
