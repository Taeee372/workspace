public class Aa {
  private int x;
  private int y;

  public Aa(){
    x = 1;
    y = 1;
  }

  public Aa(int x){
    this.x = x;
    y = 1;
  }

  public Aa(int x, int y){
    this.x = x;
    this.y = y;
  }

  public void disp() {
    System.out.println(", x = " + x + ", y = " + y);
  }
}



  class Bb extends Aa{
    private int x;
    private int y;

    public Bb(){
      x = 1;
      y = 1;
    }

    public Bb(int x){
      this.x = x;
      y = 1;
    }

    public Bb(int x, int y){
      this.x = x;
      this.y = y;
    }

    public Bb(int x1, int y1, int x2){
      super(x2);
      x = x1;
      y = y1;
    }

    public Bb(int x2, int y2, int x3, int y3){
      super(x2, y3);
      x = x2;
      y = y2;
    }

    public void disp(){
      System.out.print("x = " + x + ", y = " + y);
      // disp(); 딱히 별 말 없이 호출하면 자기 클래스 안에 거를 호출(Bb 안에 있는 disp)
      super.disp(); //이래야 부모 클래스 안에 있는 disp를 호출한다.
    }
}
