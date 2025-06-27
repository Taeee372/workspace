public class Computer {
  private String brand;
  private int price;

  public Computer(String brand, int price){
    this.brand = brand;
    this.price = price;
  }

  public void display(){
    System.out.println("브랜드 : " + brand);
    System.out.println("가격 : " + this.price);
  }
}


