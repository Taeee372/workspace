public class Member2Test {
  public static void main(String[] args) {
    Member2 m2 = new Member2();
    m2.setName("자바");
    m2.setId("java");
    m2.setPw("123");

    Member2 m3 = new Member2("자바", "java", "123");

    m2.displayInfo();
    m3.displayInfo();
  }
}
