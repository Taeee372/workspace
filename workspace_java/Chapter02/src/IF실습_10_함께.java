import java.util.Scanner;

public class IF실습_10_함께 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int b = sc.nextInt();
    System.out.print("세 번째 수 : ");
    int c = sc.nextInt();

    int min, mid, max;

    //min, mid, max 변수에 값 저장하기

    //a가 가장 큰 경우
    if(a > b && a > c){
      max = a;
      mid = b > c ? b : c;
      min = b > c ? c : b;
      /*
      //b가 c보다 큰 경우
      if(b > c){
        mid = b;
        min = c;
      }
      //그렇지 않은 경우
      else {
        mid = c;
        min = b;
      }
      */
    }

    //b가 가장 큰 경우
    else if (b > a && b > c) {
      max = b;
      mid = a > c ? a : c;
      min = a > c ? c : a;
      /*
      if (a > c) {
        mid = a;
        min = c;
      }
      else {
        mid = c;
        min = a;
      }
       */
    }

    //그렇지 않으면(c가 가장 큰 경우)
    else {
      max = c;
      mid = b > a ? b : a;
      min = b > a ? a : b;
      /*
      if (b > a){
        mid = b;
        min = a;
      }
      else {
        mid = a;
        min = b;
      }
       */
    }

    //결과출력
    System.out.println(max + " > " + mid + " > " + min);


  }
}



/*
    방법2
    if(a > b && a > c && b > c){
      //a > b > c
      max = a;
      mid = b;
      min = c;
    }
 */
