public class Man {
  String name;

  public Man(){

  }

  public void tellName(){
    System.out.println("Name is " + name);
  }
}

//한 파일에 클래스를 여러개 만들 때에는 public을 하나에만 붙일 수 있다 ...그치만 한 클래스에 여러 클래스 만들지 말자

//해당 클래스는 Man클래스를 상속한다
//Man클래스를 확장해서 BusinessMan클래스를 만들겠다는 의미 / extend : 확장하다
//상속하는 클래스와 멤버변스와 메서드를 상속받게 됨
// -> 멤버변수와 메서드를 내 것처럼 사용 가능!

//상속 관계에 있는 자식 클래스의 객체를 생성할 때,
//내부적으로 부모 클래스의 객체도 생성한다.
//부모 클래스의 객체를 생성할 때도 생성자를 호출해서 객체를 만든다.
//이때, 호출되는 생성자는 매개변수가 없는 생성자를 호출한다.

//부모클래스에 매개변수가 있는 생성자를 만들면 오류나는 이유
// -> 생성자가 하나라도 호출되면 매개변수가 없는 기본생성자가 만들어지지 않기 때문에
// -> 부모 클래스에 매개변수가 없는 기본 생성자를 만들어줘야하는데 매개변수가 있는 생성자가 있어서 못 만드네..? 오류
// -> 부모 클래스에 기본 생성자를 따로 만드는 경우는 오류나지 않는다

//그리고, 이렇게 부모클래스의 기본생성자를 호출하는 문법은 숨겨져있다.(생략되어 있다.)
//생략되어 있는 부모 클래스의 생성자 호출문법은
//자식 클래스의 생성자 첫 줄에 super()라는 키워드로 생략되어 있다.
class BusinessMan extends Man{

  String company;

  public BusinessMan(String company){
    //super(); //얘가 숨겨져있슴 / 부모클래스의 생성자 호출 문법
    this.company = company;
  }

  public void tellCompany(){
    System.out.println("Company is " + company);
  }
}
