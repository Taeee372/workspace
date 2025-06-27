public class 문자열비교 {
  public static void main(String[] args) {
    //숫자가 같은지 비교하기 위해서는 '==' 연산자를 사용
    int a = 5, b = 10;
    System.out.println(a == b);

    String name1 = "홍길동";
    String name2 = "이순신";
    System.out.println(name1 == name2); //잘못된 코드!!

    //문자열 비교 방식
    System.out.println( "홍길동".equals("홍길동") );

    String str1 = "이순신";
    System.out.println( "이순신".equals(str1) );
    System.out.println( str1.equals("이순신") );

    String addr1 = "울산시";
    String addr2 = "서울시";
    System.out.println( addr1.equals(addr2) );

  }
}
