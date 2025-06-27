public class BusinessManTest {
  public static void main(String[] args) {
    BusinessMan b1 = new BusinessMan(1, "김사원", "개발부");
    BusinessMan b2 = new BusinessMan(2, "이사원", "영업부");
    BusinessMan b3 = new BusinessMan(3, "박사원", "총무부");
    BusinessMan b4 = new BusinessMan(4, "최사원", "개발부");
    BusinessMan b5 = new BusinessMan(5, "홍사원", "경영부");

    BusinessMan[] businessMan = new BusinessMan[5];

    //1. BusinessMan 클래스 객체 5개를 임의의 값으로 초기화하여 배열에 저장하시오.
    businessMan[0] = b1;
    businessMan[1] = b2;
    businessMan[2] = b3;
    businessMan[3] = b4;
    businessMan[4] = b5;


    //2. 배열에 저장한 사원 중 부서명이 "개발부"인 사원의 모든 정보를 출력하시오.
    for (BusinessMan b : businessMan){
      if (b.getBusinessName().equals("개발부")) {
        b.display();
      }
    }
    System.out.println();
    //3. 사번이 3번 이상인 사원들의 이름을 모두 출력하시오.
    for (BusinessMan b : businessMan){
      if (b.getManNum() >= 3) {
        System.out.println(b.getName());
      }
    }

    System.out.println();
    //4. 배열에 저장한 사원 중 부서명이 "개발부"이면서 사번이 짝수인 사원의 모든 정보를 출력하시오.
    for (BusinessMan b : businessMan){
      if (b.getBusinessName().equals("개발부") && b.getManNum() % 2 == 0) {
        b.display();
      }
    }

  }
}
