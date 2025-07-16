package com.green.restful.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class EmpController {

  //모든 사원 정보를 조회하는 API
  @GetMapping("/emps")
  public String getEmpsInfo(){
    return "모든 사원 정보 조회";
  }

  //한 명의 사원 정보를 조회하는 API
  @GetMapping("/emps/{empno}")
  public String getEmpInfo(@PathVariable("empno") int a){
    System.out.println("a = " + a);
    return "한 명의 사원 정보 조회";
  }

  //한 명의 사원을 등록하는 API (사원명, 직급, 급여 정보를 등록)
  @PostMapping("/emps")
  public String insertEmp(@RequestBody EmpDTO empDTO){
    System.out.println(empDTO);
    return "사원 등록";
  }

  //한 명의 사원을 삭제하는 API
  @DeleteMapping("/emps/{empno}")
  public String deleteEmp(@PathVariable("empno") int a){
    System.out.println("a = " + a);
    return "사원 삭제";
  }

  //한 명의 사원 정보를 수정하는 API(직급, 급여를 수정)
  @PutMapping("/emps/{empno}")
  public String updateEmp(@RequestBody EmpDTO empDTO, @PathVariable("empno") int a){
    System.out.println(empDTO);
    System.out.println("a = " + a);
    return "수정 완료";
  }
}
