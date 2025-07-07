public class LGTV implements TV {


  @Override
  public void turnOn() {
    System.out.println("LGTV - 전원 켬");
  }

  @Override
  public void turnOff() {
    System.out.println("LGTV - 전원 끔");
  }

  @Override
  public void volumeUp() {
    System.out.println("LGTV - 소리 올림");
  }

  @Override
  public void volumeDown() {
    System.out.println("LGTV - 소리 내림");
  }
}
