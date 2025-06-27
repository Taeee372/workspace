public class Switch_1 {
  public static void main(String[] args) {

    int x = 3;

    //소괄호 : 값 또는 변수
    switch(x){
      //x가 1인 경우에는
      case 1 :
        System.out.println("A");
        System.out.println("A");
        break; //break가 해석되면 switch문 종료
      case 2 :
        System.out.println("B");
        break;
      case 3 :
        System.out.println("C");
        System.out.println("C");
      default : // else와 동일, 필수 아님
        System.out.println("D");
    }

  }
}
