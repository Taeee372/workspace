public class TvTest {
  public static void main(String[] args) {
    Tv tv = new Tv();
    Tv tv1 = new Tv();

    //tv객체와 tv1 객체의 참조값이 같냐?
    System.out.println(tv.equals(tv1));

    tv = tv1;
    //tv객체와 tv1의 참조값이 같냐?
    System.out.println(tv.equals(tv1));

    Rect r3 = new Rect();
    System.out.println(r3.toString());
    System.out.println(r3);

    int[] arr = new int[2];
    System.out.println(arr.toString());
    System.out.println(arr);

    Rect r1 = new Rect();
    Rect r2 = new Rect();
    System.out.println(r1.equals(r2));

    String aa = "kim";
    aa.equals("kim");

    //int a;(변수명)
    //String b;(변수명, 참조변수명, 객체)
    //Rect r;(변수명, 참조변수명, 객체)
    //int a[];(변수명, 참조변수명, 객체, 배열)
    //Lidy<String a>;(변수명, 참조변수명, 객체, 리스트)


  }
}
