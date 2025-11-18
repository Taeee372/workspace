package com.green.legacy_board.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @GetMapping("/test1")
  public String test1(){
    System.out.println("test1 메서드 실행");
    return "test1";
  }

  @PreAuthorize("isAuthenticated()") //로그인 한 사람만 가능
  @GetMapping("/test2")
  public String test2(){
    System.out.println("test2 메서드 실행");
    return "test2";
  }

  //디비에 들어갈 때는 ROLE_USER처럼 앞에 ROLE_가 붙어있어야 함, 그치만 hasRole(이 안에 쓰는 건 ROLE_을 붙이지 않는다)
  @PreAuthorize("hasRole('USER')") //권한이 USER라면...
  @GetMapping("/test3")
  public String test3(){
    System.out.println("test3 메서드 실행");
    return "test3";
  }

  @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')") //권한이 ADMIN, MANAGER 둘 중 하나라면...
  @GetMapping("/test4")
  public String test4(){
    System.out.println("test4 메서드 실행");
    return "test4";
  }

}
