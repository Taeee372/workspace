public class Man {
  String name;
  int age;
  String adress;

  public void setInfo(String newName, int newAge, String newAdress){
    name = newName;
    age = newAge;
    adress = newAdress;
  }

  public void setName(String newName){
    name = newName;
  }

  public void setAge(int newAge){
    age = newAge;
  }

  public void setAdress(String newAdress){
    adress = newAdress;
  }

  public String getName(){
    return name;
  }
  public int getAge(){
    return age;
  }
  public String getAdress(){
    return adress;
  }

  public void printInfo(){
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + adress);
  }
}
