public class ExtendsQ {

  // 1번
  // 부모 클래스에 매개변수가 없는 클래스가 없기 때문에

  // 2-2번
  // 클래스 이름과 생성자명이 같지 않기 때문에 오류남 (이지만 지금은 오타인 듯)
  // 매개변수생성자A30, 생성자B

  // 2-3번
  // super();는 제일 위에 있어야한다.

  // 3번
  // 생성자A:10, 생성자A, 생성자B:11

  // 4번
  // private int j; -> protected int j; OR return n + i + j -> return n + i + getj()

  // 5번
  // B클래스에서 매개변수가 없는 생성자(super();)를 호출했는데
  // A클래스에는 매개변수가 없는 생성자가 없다.

  // 6번
  // super(size);

  // 7번
  /*
  class A{
    private int n;
    public int getN(){
      return n;
    }
    public void setN(int i){
      n = i;
    }
  }

  class B extends A {
    public String s;
    //private int n;
    public int m;
    private char c;

    //public void setN(int i) {
    //  n = i;
    //}
    public void setC(char ch){
      c = ch;
    }
    public char getC(){
      return  c;
    }
    //public int getN(){
     //return n;
    //}
  }

  class C extends B{
    //public String s;
    //private char c;
    //private int n;
    //public int m;
    public double d;

    //public void setN(int i){
      //n = i;
    }
    //public void setC(char ch){
     // c = ch;
    //}
    //public char getC(){
     // return c;
    //}
    //public int getN(){
    //  return n;
    //}
  }
   */


  // 7번 답
  class A {
    private int n;

    public int getN() {
      return n;
    }

    public void setN(int i) {
      n = i;
    }
  }

  class B extends A {
    public String s;
    public int m;
    private char c;

    public void setC(char ch) {
      c = ch;
    }

    public char getC() {
      return c;
    }
  }

  class C extends B {
    public double d;
  }
}

  // 8번
  //

  // 9번
  // Child child = new Child();

    //public Child(){
     //this("홍길동");       ----> public Child(String name){          ---->  public Parent(){
     //print(Child() call);         super();                                   this("대한민국");
     //}                            this.name = name;                          print("Parent() call");
     //                             print("Child(String name) call")          }

      //최종 답
     //Parent(String nation) call
     //Parent() call
     //Child(String name) call
     //Child() call