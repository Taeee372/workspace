package staticStudy;

public class CountTest2 {
  public static void main(String[] args) {
    System.out.println(Count.cnt);
    Count.cnt = 10;
    System.out.println(Count.cnt);

    Count c1 = new Count();
    System.out.println(Count.cnt);
    Count.cnt = 10;
    Count c2 = new Count();
    Count.aaa();

    Math.random();
    Math.max(10, 20);

    System.out.println(11);
    System.out.println("java");


  }
}

//static 변수 생성 -> 객체 생성(생성자 호출)