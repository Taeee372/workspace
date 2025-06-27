import java.util.Scanner;

public class if심화문제_1_함께 {
  public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);

    System.out.print("첫 번째 변의 길이 : ");
    int a = sc.nextInt();
    System.out.print("두 번째 변의 길이 : ");
    int b = sc.nextInt();
    System.out.print("세 번째 변의 길이 : ");
    int c = sc.nextInt();

    //삼각형이 가능하다면...
    if (a + b > c && a + c > b && b + c > a){
      System.out.println("삼각형 가능!");
    }
    else{
      System.out.println("삼각형 불가능...");
    }


  }
}
