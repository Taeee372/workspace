package staticStudy;

public class Bank1 {
  int money; //예금액
  String owner; //소유주
  static double iyul; //이율

  static {
    iyul = 5.0;
  }

  public Bank1(String owner){
    money = 10000;
    iyul = 5.0;
    this.owner = owner;
  }

  /*
  public static void aaa(){
    System.out.println(money); ->money에 오류뜸
    why?
     - static이 붙어있으면 static이 붙어있는 걸 먼저 해석한 후 다른 것들을 해석함
     - 여기서는 double iyul, iyul = 5.0, void aaa를 먼저 해석 -> 아직 money는 해석되지 않은 상태
     - 이 메서드에서는 아직 money가 뭔지 해석이 안 된 상태이기 때문에 money가 뭔데?라고 오류가 뜨는 것
  }
   */

  public static void aaa(){
    System.out.println(123);
    //bbb;
  }

  public void bbb(){
    System.out.println("aaa");
  }
}
