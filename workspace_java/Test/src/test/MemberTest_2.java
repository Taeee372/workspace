package test;

public class MemberTest_2 {
  public static void main(String[] args) {
    Member member = new Member();

    member.setInfo("java", "1234", "kim", 20);

    member.showInfo();

    System.out.println(member.isLogin("java", "1234") ? "로그인 가능" : "로그인 불가능");

    // 위의 코드와 같은 내용
    //  if (member.isLogin("java", "1234")) {
    //    System.out.println("로그인 가능");
    //  }
    //  else System.out.println("로그인 불가능");

  }
}
