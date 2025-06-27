public class ComputerTest {
  public static void main(String[] args) {
    Computer c1 = new Computer("삼성", 1000);

    c1.display();

    //참조자료형은 선언하면 무조건 null 가짐
    int[] aaa; //null
    String a; //null
  //  Computer c2; //null

    //기본자료형은 배열을 만들면 0으로 값이 들어가있지만
    //참조자료형은 배열을 만들면 null로, 값이 들어가있지 않음
    //null : 값이 정해지지 않았다 - 빈 상자만 만들어진 것

    Computer c2 = c1; //Computer로 자료형이 같아서 가능
    c2.display();

    int[] arr = {1,2,3};

    Computer[] array = new Computer[3];

  }

  public Computer test(Computer c){
    c.display();
    return c;
  }
}
