package 실습;

public class 반복문_실습13 {
  public static void main(String[] args) {

    int sum = 0;

    for (int i = 1; i < 300; i++){
      sum = sum + i;
      if (sum > 300){
        break;
      }
    }
    System.out.println(sum);


    System.out.println();

  }
}
