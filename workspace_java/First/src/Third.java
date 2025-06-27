public class Third {
  public static void main(String[] args){
    //문자는 반드시 쌍따옴표로 감싼다.
    System.out.println("I want go home");

    //숫자는 쌍따옴표에 감싸지 않는다.
    System.out.println(10);

    //숫자는 문자로도 표현 가능 -> 단, 이 경우 연산은 불가능
    System.out.println("10");

    //소괄호 안의 내용이 연산 가능하면 연산 결과를 출력
    System.out.println(3 + 2);

    System.out.println("3 + 2");

    //문자끼리의 합은 문자 나열의 결과가 나온다.
    //문자끼리의 합은 가능하지만, 나머지 연산은 불가능
    System.out.println("3" + "2");

    //숫자와 문자의 합은 문자 나열의 결과와 같다.
    System.out.println(10 + "가");

    System.out.println(10 + 20 + "java" + 30);


  }
}
