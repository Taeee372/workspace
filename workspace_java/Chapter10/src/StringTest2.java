public class StringTest2 {
  public static void main(String[] args) {
    //String 클래스에 정의된 유용한 메서드 소개
    String s1 = "Simple";
    String s2 = "String";

    //concat() : 문자열 나열
    String s3 = s1.concat(s2);
    System.out.println("s3 = " + s3);

    //length() : 문자열의 길이
    int length = s3.length();
    System.out.println("s3문자열의 길이 : " + length);

    //매개변수로 들어간 정보를 문자열로 리턴
    String result1 = String.valueOf(10); //"10"
    String result2 = String.valueOf(10.5); //"10.5"

    //substring() : 문자열 일부 추출
    String s4 = "abcdefg";
    String result3 = s4.substring(3); //3번째 index부터 가져오겠다
    System.out.println("result3 = " + result3);
    String result4 = s4.substring(2, 5); //2번째 index부터 5번째 index 전까지!
    System.out.println("result4 = " + result4);

    String s5 = "apple, orange, banana"; //010-1111-2222
    String[] result5 = s5.split(","); //s5 문자열을 ,로 분리시킨다
    System.out.println(result5[1]);

    String s6 = "2025-07-04";
    String result6 = s6.replace("-", ".");
    System.out.println(result6);

    String s7 = "I WANT GO HOME";
    boolean result7 = s7.contains("go");
    System.out.println(result7);

  }
}
