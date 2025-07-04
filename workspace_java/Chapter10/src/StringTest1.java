public class StringTest1 {
  public static void main(String[] args) {
    //String 데이터는 메모리(용량) 사용을 최소화하도록 설계되어있음
    // -> 기본자료형 문법을 사용해 문자열 변수를 만들 때
    //    만약 만드려고 하는 문자열이 이미 있다면, 새로운 문자열을 만들지 않는다.

    //String은 Imutable(이뮤터블 - 값이 변하지 않는) 변수임~~
    //-> 문자열 데이터는 한 번 값이 저장되면 그 값을 바꿀 수 없다!!
    String str1 = "Simple String";
    String str2 = "Simple String";
    String str3 = new String("Simple String");
    String str4 = new String("Simple String");

    // == : 숫자 비교에 사용
    // == : 참조(주소값)이 같으면 리턴 true
    if(str1 == str2)
      System.out.println("str1과 str2는 같습니다");
    else
      System.out.println("str1과 str2는 다릅니다");

    if(str3 == str4)
      System.out.println("str3과 str4는 같습니다");
    else
      System.out.println("str3과 str4는 다릅니다");

    String name1 = "java";
    String name2 = "java";
    name2 = "python";
    System.out.println(name1);
    System.out.println(name2);

    int[] a1 = {1};
    int[] a2 = a1;
    a2[0] = 5;
    System.out.println(a1[0]);
    System.out.println(a2[0]);
  }
}
