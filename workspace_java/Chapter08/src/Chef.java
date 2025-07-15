public class Chef implements Cookable{
  public void cook(){
    System.out.println("요리합니다");
  }
}

class NewChef implements Cookable{
  public void cook(){
    System.out.println("요리");
  }
}