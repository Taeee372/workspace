import java.util.Scanner;

public class Test3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("숫자 입력 : ");
    int num = sc.nextInt();

    int cnt = 0;
    int one = num % 10;
    int ten = (num % 100) / 10;
    int hundred = num / 100;

    if (one % 3 == 0 && one != 0) {
      cnt++;
    }
    if (ten % 3 == 0 && ten != 0) {
      cnt++;
    }
    if (hundred % 3 == 0 && hundred != 0){
      cnt++;
    }

    switch (cnt){
      case 0 :
        System.out.println("박수 0번");
        break;
      case 1 :
        System.out.println("박수 1번");
        break;
      case 2 :
        System.out.println("박수 2번");
        break;
      case 3 :
        System.out.println("박수 3번");
    }
  }
}
