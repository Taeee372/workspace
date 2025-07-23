package test;

public class MemberTest {
  public static void main(String[] args) {
    Member member = new Member();

    member.setInfo("java", "1234", "kim", 20);

    member.showInfo();

    boolean result = member.isLogin("java", "1234");
    if (result) {
      System.out.println("로그인 가능");
    }
    else System.out.println("로그인 불가능");

    boolean result1 = member.isLogin("java", "1111");
    if (result1) {
      System.out.println("로그인 가능");
    }
    else System.out.println("로그인 불가능");
  }
}
