package CollectionList_1_2;

public class Emp {
  private int empNo;
  private String name;
  private String dept;
  private String tel;
  private int Salary;

  public Emp(int empNo, String name, String dept, String tel, int Salary) {
    this.empNo = empNo;
    this.name = name;
    this.dept = dept;
    this.tel = tel;
    this.Salary = Salary;
  }

  public int getEmpNo() {
    return empNo;
  }

  public String getTel() {
    return tel;
  }

  public String getName() {
    return name;
  }

  public String getDept() {
    return dept;
  }

  public int getSalary() {
    return Salary;
  }

  public void setEmpNo(int empNo) {
    this.empNo = empNo;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setDept(String dept) {
    this.dept = dept;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public void setSalary(int salary) {
    Salary = salary;
  }
}
