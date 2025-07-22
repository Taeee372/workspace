import java.util.Scanner;

public class Test1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫 번째 수 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 수 : ");
    int b = sc.nextInt();
    System.out.print("세 번째 수 : ");
    int c = sc.nextInt();

    int max, mid, min;

    if (a > b && a > c) {
      max = a;
      mid = Math.max(b, c); // mid = b > c ? b : c;
      min = Math.min(b, c); // min = b > c ? c : b;
    }
    else if (b > a && b > c) {
      max = b;
      mid = Math.max(a, c);
      min = Math.min(a, c);
    }
    else {
      max = c;
      mid = Math.max(a, b);
      min = Math.min(a, b);
    }
    System.out.println("max = " + max + ", mid = " + mid + ", min = " + min);
  }
}
