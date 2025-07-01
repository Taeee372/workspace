package CollectionList_1_2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
  private List<Emp> empList; //List도 선언 따로 할 수 있슴
  private Scanner sc;

  public EmpService(){
    empList = new ArrayList<>();
    sc = new Scanner(System.in);

    empList.add(new Emp(1001, "홍길동", "개발부", "010-1111-1234", 1000));
    empList.add(new Emp(1002, "김길동", "개발부", "010-1110-1100", 2000));
    empList.add(new Emp(1003, "최길동", "개발부", "010-1000-1000", 3000));
    empList.add(new Emp(1004, "고길동", "영업부", "010-0000-1111", 4000));
    empList.add(new Emp(1005, "헝길동", "총무부", "010-1100-0011", 5000));
  }

   // String tel = "010-2222-5555"; subString 사용예시
   // String result = tel.substring(9);

    //메서드의 return의 역할
    //1. 메서드의 결과 데이터를 반환(리턴)
    //2. 메서드 안의 리턴을 (아무것도 안 붙이고) return; 이렇게 사용하면 메서드를 종료하라는 의미

    public void login(){
    //boolean isRunning = true; 이거 써서 멈추는 방법도 있슴
    while(true) {
      System.out.print("사번 : ");
      int no = sc.nextInt();
      System.out.print("비밀번호(연락처의 마지막 4자리) : ");
      String pw = sc.next();

      for (int i = 0; i < empList.size(); i++){
        if (empList.get(i).getEmpNo() == no && empList.get(i).getTel().substring(9).equals(pw)) {
          System.out.println("로그인 하였습니다.");
          System.out.println("'" + empList.get(i).getName() + "'님 반갑습니다.");
          return;
        }
      }
      System.out.println("사번 혹은 비밀번호가 일치하지 않습니다."); //return을 넣었기 때문에 boolean 뭐 이런 변수 안 넣어도 된다.
    }
  }

  public void printSalaryInfo(){
    System.out.println();
    System.out.print("부서명 : ");
    String dept = sc.next();
    System.out.println("==" + dept + " 월급 현황==");
    int sum = 0;
    int cnt = 0;
    for (Emp emp : empList){
      if (emp.getDept().equals(dept)) {
        sum = sum + emp.getSalary();
        cnt++;
        System.out.print("이름 : " + emp.getName() + ", ");
        System.out.println("월급 : " + emp.getSalary());
      }
    }

    int avg = 0;
    avg = sum / cnt;
      System.out.println(dept + "서의 월급 총액은 " + sum + "원이며, 평균 급여는 " + avg + "원입니다.");
  }

  public void PrintSalaryRaise(){
    System.out.println();
    System.out.print("부서명 : ");
    String deptName = sc.next();
    System.out.print("인상급여 : ");
    int salary = sc.nextInt();
    System.out.println(deptName + " 각 사원의 급여가 각각 " + salary + "원씩 인상됩니다.");

    System.out.println("==월급 인상 후 " + deptName + " 월급 현황==");

    for (int i = 0; i < empList.size(); i++){
      if (empList.get(i).getDept().equals(deptName)) {
        empList.get(i).setSalary(empList.get(i).getSalary() + salary);
        System.out.print("이름 : " + empList.get(i).getName() + ", ");
        System.out.println("월급 : " + (empList.get(i).getSalary()));
      }
    }
  }
}

