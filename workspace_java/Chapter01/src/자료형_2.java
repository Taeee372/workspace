//형 변환
public class 자료형_2 {
  public static void main(String[] args) {
    //작은 범위의 데이터를 큰 범위의 데이터에 저장하는 것은 가능!
    //작은 범위의 데이터를 큰 범위의 자료형으로 변환 후 저장이 됨!
    //자동 형 변환(promotion)이 일어남(컴퓨터가 알아서 자료형을 변환해주는 과정)
    int num1 = 10;
    double num2 = num1;
    System.out.println(num2); //10.0

    //큰 범위의 데이터를 작은 범위의 데이터형에 저장하지 못한다.
    //이럴 경우, 강제 형 변환(casting)을 통해서 작은 범위의 데이터에 저장 할 수 있다.
    //강제 형 변환을 하면 소수점 데이터가 사라진다. (반올림되지 않고 소수점 자리가 날라감)
    double num3 = 10.9;
    int num4 = (int)num3; //실수를 정수로 강제 형 변환(casting)
    System.out.println(num4);
  }
}
