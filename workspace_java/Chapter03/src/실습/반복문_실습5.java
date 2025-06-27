package 실습;

public class 반복문_실습5 {
  public static void main(String[] args) {
   // 1 ~ 10까지의 합을 저장할 변수
   int sum = 0;
   int i = 1;

   while (i < 11){
     sum = sum + i;
     i++;

   }
    System.out.println(sum);
  }
}
