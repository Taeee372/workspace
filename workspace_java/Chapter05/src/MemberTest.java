public class MemberTest {
  public static void main(String[] args) {
    Member m1 = new Member();

    m1.setName("홍길동");
    m1.setId("Gildong");
    m1.setPassword("1234");
    m1.setAge(20);

    m1.printMemberInfo();

  }
}
