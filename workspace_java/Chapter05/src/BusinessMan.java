public class BusinessMan {
  private int manNum;
  private String name;
  private String businessName;

  public BusinessMan(int manNum, String name, String businessName) {
    this.manNum = manNum;
    this.name = name;
    this.businessName = businessName;
  }

  public int getManNum() {
    return manNum;
  }

  public void setManNum(int manNum) {
    this.manNum = manNum;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getBusinessName() {
    return businessName;
  }

  public void setBusinessName(String businessName) {
    this.businessName = businessName;
  }

  public void display(){
    System.out.println("사원번호 : " + manNum);
    System.out.println("사원명 : " + name);
    System.out.println("부서명 : " + businessName);
  }
}
