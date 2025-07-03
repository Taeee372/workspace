public class CompFriend extends Friend{
  private String dept;

  public CompFriend(String name, String phone, String dept) {
    super(name, phone);
    this.dept = dept;
  }

  public void showInfo(){
    super.showInfo();
    System.out.println("부서 : " + dept);
  }
}
