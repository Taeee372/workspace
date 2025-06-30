package staticStudy;

public class CountTest {
  public static void main(String[] args) {
    Count c1 = new Count();
    Count c2 = new Count();

    System.out.println(c1.cnt);
    System.out.println(c2.cnt);

    c1.cnt = c1.cnt + 5;

    System.out.println(c1.cnt);
    System.out.println(c2.cnt);
  }
}
