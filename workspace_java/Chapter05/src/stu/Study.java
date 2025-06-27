package stu;

public class Study {
  /* 변수 선언
  자료형 변수명(자유);
   int i; | String[] str; | Person p; <- 클래스 자료형
   */

  /* 메서드 생성
    - 리턴X 매개변수X
    public void 메서드명(자유)(){
    }
     public void method(){
      }

    - 리턴X 매개변수O
    public void 메서드명(자유)(자료형 변수명(자유)){
    }
     public void method(int a){
     }

    - 리턴O 매개변수O
    public 자료형 메서드명(자유)(자료형 변수명(자유)){
    }
     public int method(int a){
     }
     public Person person(Person p){
     }
     public Person(){
     }
   */

  /* 객체 생성
  클래스명 객체명(자유) = new 생성자();
   -> 생성자명은 클래스명과 같아야하니 사실상
   클래스명 객체명(자유) = new 클래스명();
  Person person = new Person();
   */

  /* 생성자 생성
  public 클래스명(){
  }
  public Person(){
  }
   */

  /* 객체에서 멤버변수(필드)에 접근하는 문법
  객체명.필드명;

  public class Person{
   String brand;
   int price;

   public String getBrand(){
    return brand;
   }
  }

  public class PersonTest{
   public static void main(String[] args) {
     Person person = new Person;
    >> person.brand; <<

  필드값 변경하고 싶을 때
  person.brand = "Samsung"
  //객체의. 브랜드에 접근 후 = 값(브랜드명) 변경
   */

  /* 객체의 메서드 호출하는 문법
  객체명.메서드 호출;
  person.getBrand();
   */

  /* setter
  public void set변수명(자유)(자료형 변수명(자유)){
  위에서 선언된 변수명 = 괄호 안의 변수명;
  }
  public void setBrand(String b){
  brand = b;
  }
  public void setBrand(String brand){
   this.brand = brand; -> 정석
  }
   */

  /* getter
  public 자료형 get변수명(자유)(){
   return 위에서 선언된 변수명;
  }
  public String getBrand(){
   return brand;
  }
  클래스 자료형도 들어올 수 있다
  리턴과 자료형만 맞으면 됨!!!!!!
   */



}
