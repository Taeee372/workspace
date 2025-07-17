package com.green.restful.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AxiosController {

  @GetMapping("/getNum")
  public int getNum(){
    System.out.println("getNum 메서드 실행~");
    return 10;
  }
  @GetMapping("/getStr")
  public String getStr(){
   return "react";
  }

  @GetMapping("/getStu")
  public Student getStudent(){
    Student stu = new Student("kim", 90, 70);
    return stu;
  }

  @GetMapping("/stuList")
  public List<Student> getStuList(){
    List<Student> stuList = new ArrayList<>();
    stuList.add(new Student("김자바", 70, 70));
    stuList.add(new Student("이자바", 90, 80));
    stuList.add(new Student("박자바", 85, 90));
    return stuList;
  }

  @GetMapping("/getClass")
  public List<String> getOptionList(){
    List<String> classList = new ArrayList<>();
    classList.add("자바반");
    classList.add("캐드반");
    classList.add("회계반");
    return classList;
  }

  @GetMapping("/getHobby")
  public List<String> getHobbyList(){
    List<String> hobbyList = new ArrayList<>();
    hobbyList.add("게임");
    hobbyList.add("운동");
    hobbyList.add("낮잠");
    return hobbyList;
  }

}
