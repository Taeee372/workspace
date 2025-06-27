public class Member2 {
  private String name;
  private String id;
  private String pw;

//기본 생성자
  public Member2(){
    name = null;
    id = null;
    pw = null;
  }

  //모든 필드 데이터를 변경할 수 있는 생성자
  public Member2(String name, String id, String pw){
    this.name = name;
    this.id = id;
    this.pw = pw;
  }

  public void setName(String name){
    this.name = name;
  }
  public void setId(String id){
    this.id = id;
  }
  public void setPw(String pw){
    this.pw = pw;
  }

  public String getName(){
    return name;
  }
  public String getId(){
    return id;
  }
  public String getPw(){
    return pw;
  }

  public void displayInfo(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + pw);
  }
}
