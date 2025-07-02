public class Work {
  public static void main(String[] args) {
    Bb bp = new Bb();
    Bb bp1 = new Bb(10);
    Bb bp2 = new Bb(10, 20);
    Bb bp3 = new Bb(10, 20, 30);
    Bb bp4 = new Bb(10, 20, 30, 40);

    bp.disp(); // x = 1, y = 1, x = 1, y = 1
    bp1.disp(); // x = 10, y = 1, x = 1, y = 1
    bp2.disp(); // x = 10, y = 20, x = 1, y = 1
    bp3.disp(); // x = 10, y = 20, x = 30, y = 1
    bp4.disp(); // x = 10, y = 20, x = 30, y = 40

  }
}
