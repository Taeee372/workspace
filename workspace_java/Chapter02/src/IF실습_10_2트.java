import java.util.Scanner;

public class IF실습_10_2트 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int b = sc.nextInt();
    System.out.print("세 번째 수 : ");
    int c = sc.nextInt();

    int max, mid, min;

    //a max
    if (a > b && a > c){
      max = a;
      mid = b > c ? b : c;
      min = b > c ? c : b;
    }
    // b max
    else if (b > a && b > c) {
      max = b;
      mid = a > c ? a : c;
      min = a < c ? a : c;
    }
    //c max
    else {
      max = c;
      mid = a > b ? a : b;
      min = a > b ? b : a;
      }
    System.out.println(max + " > " + mid + " > " + min);

  }

}

