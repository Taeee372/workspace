package com.green.first;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

  //해당 메서드 실행 : localhost:8080/t1
  @GetMapping("/t1")
  public String test1(){
    return "test1() 메서드 실행";
  }

  //해당 메서드 실행 : localhost:8080/t2
  @GetMapping("/t2")
  public int test2(){
    return 5;
  }

  @GetMapping("/t3")
  public int[] test3(){
    int[] arr = {1, 2, 3};
    return arr;
  }

  @GetMapping("/t4")
  public Student test4(){
    Student student = new Student("홍", 80, 90);
    return student;
  }

  @GetMapping("/t5")
  public List<Student> test5(){
    List<Student> stuList = new ArrayList<>();
    Student s1 = new Student("kim", 70, 90);
    Student s2 = new Student("lee", 80, 100);
    Student s3 = new Student("park", 75, 95);
    stuList.add(s1);
    stuList.add(s2);
    stuList.add(s3);
    return stuList;
  }

}
