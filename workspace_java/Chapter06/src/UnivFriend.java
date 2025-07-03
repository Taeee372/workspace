public class UnivFriend extends Friend{
  private String major;

  public UnivFriend(String name, String phone, String major) {
    super(name, phone);
    this.major = major;
  }

  public void showInfo(){
    super.showInfo();  //showInfo(); 로 super를 생략해도 된다
    System.out.println("전공 : " + major);
  }
}
