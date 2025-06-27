public class Book {
  String title;
  String writer;
  int price;

  //제목을 변경하는 메서드
  //this. -> 클래스에서 선언된 ~
  //  ex) this.title : 클래스에서 선언된 title
  public void setTitle(String title){
    this.title = title;
  }

  //책의 모든 정보를 변경하는 메서드
  public void setBook(String title, String writer, int price){
    this.title = title;
    this.writer = writer;
    this.price = price;
  }

  public void printBook(){
    setTitle("aaa");
    this.setTitle("aaa"); //this. 은 메서드 앞에서도 사용 가능하다. 그치만 잘 쓰이진 않음
    System.out.println("제목 : " + title); //보통은 이렇게 씀
    System.out.println("제목 : " + this.title); //그치만 이렇게도 쓸 수는 있다
  }
}
