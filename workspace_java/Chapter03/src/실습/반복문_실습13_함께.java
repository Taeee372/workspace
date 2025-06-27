package 실습;

public class 반복문_실습13_함께 {
  public static void main(String[] args) {

    //무한루프
      //while (true)

    int i = 1;
    int sum = 0;

    while (i < 100){
      sum = sum + i;

      if (sum > 300) {
        System.out.println(sum);
        System.out.println(i);
        break;
      }

      i++;
      //System.out.println("i = " + i + " / sum = " + sum); ->직관적인 확인 가능

    }


  }
}
