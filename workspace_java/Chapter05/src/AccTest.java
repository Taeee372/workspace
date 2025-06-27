public class AccTest {
  public static void main(String[] args) {
    //초기화
    // - 모든 다른 기능보다 먼저 실행돼야 함
    // - 초기화는 최초 1회만 실행되어야 한다
    // - so 메서드로 초기화 시키는 건 적절하지 않다 (몇 번이고 더 실행할 수 있으니까)

    //클래스명 객체명 = new 클래스명();
    //사실은! 이게 아니라 클래스명 객체명 = new 생성자호출(); 이었던 거임
    Account acc1 = new Account();
    acc1.printAcc();

    Account acc2 = new Account(1000);
    acc2.printAcc();

    Account acc3 = new Account("1111", 5000, "kim");
    acc3.printAcc();

    //계좌정보 초기화 - 얜 못 쓰는 예시
    //acc.initAcc("1111", 1000, "kim");
    // acc.printAcc();
  }
}
