public class Calculator {
  int num1;
  int num2;
  String oper;

  //num1과 num2의 값을 변경하는 메서드
  public void setNum(int num1, int num2){
    this.num1 = num1;
    this.num2 = num2;
  }

  //더하기 결과를 리턴하는 메서드
  public int getSum(){
    return num1 + num2;
  }

  //빼기 결과를 리턴하는 메서드
  public int getSub(){
    return num1 - num2;
  }

  //곱하기 결과를 리턴하는 메서드
  public int getMulti(){
    return num1 * num2;
  }

  //나누기 결과를 리턴하는 메서드
  public double getDiv(){
    return num1 / (double)num2;
  }

}
