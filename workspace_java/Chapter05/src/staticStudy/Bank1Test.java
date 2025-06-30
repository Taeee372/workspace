package staticStudy;

public class Bank1Test {
  public static void main(String[] args) {
    Bank1 b1 = new Bank1("kim");
    Bank1 b2 = new Bank1("lee");
    Bank1 b3 = new Bank1("hong");
    Bank1 b4 = new Bank1("park");
    Bank1 b5 = new Bank1("choi");

    System.out.println(b1.iyul);
    System.out.println(b2.iyul);

    Bank1.iyul = 8.0;

    System.out.println(b1.iyul);
    System.out.println(b2.iyul);

    Math.random();
    System.out.println(Math.PI);
  }
}
