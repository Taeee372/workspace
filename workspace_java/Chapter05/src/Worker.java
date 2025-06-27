public class Worker {
  private String company;
  private String dept;
  private Person personInfo; //자료형 변수명

  public Worker(String company, String dept, Person personInfo) {
    this.company = company;
    this.dept = dept;
    this.personInfo = personInfo;
  }

  public Person getPersonInfo(){
    return personInfo;
  }

  public void setPersonInfo(Person personInfo){
    this.personInfo = personInfo;
  }

  public void printWorker(){
    personInfo.printPersonInfo();
    System.out.println("회사명 : " + company);
    System.out.println("부서명 : " + dept);
  }
}
