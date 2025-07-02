public class Box {
  String a;
  protected String b;

  public String getB() {
    return b;
  }

  public void setB(String b) {
    this.b = b;
  }
}

//private 접근제한자로 선언한 변수도 상속한다.
//단, 상속을 받아도 직접 접근은 불가하다.
//private < protected < default < public
//private : 변수나 메서드를 선언한 클래스 내에서만 접근 가능!
//protected : private접근 범위 + 상속받은 자식 클래스에서 접근 가능!
//default : 같은 패키지 내에서는 접근 가능
//public : 같은 프로젝트 내에서는 접근 가능
class SubBox extends Box{
  public void test(){
    a = "aa";
    System.out.println(a);

    setB(("java"));
    System.out.println(getB());

    b = "bb";
    System.out.println(b);
  }
}
