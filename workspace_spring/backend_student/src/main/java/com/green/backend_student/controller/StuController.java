package com.green.backend_student.controller;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import com.green.backend_student.service.StuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StuController {
  private StuService stuService;

  public StuController (StuService stuService){
    this.stuService = stuService;
  }

  //학급 목록 조회
  @GetMapping("/class")
  public List<ClassDTO> selectClassList(){
    return stuService.selectClassList();
  }

  //학생 목록 조회
  @GetMapping("/students")
  public List<StuDTO> selectStuList(){
    return stuService.selectStuList();
  }

  //반에 따른 학생 정보 조회
  @GetMapping("/students/{classNum}")
  public List<StuDTO> selectStuListClass(@PathVariable("classNum") int classNum){
    return stuService.selectStuListClass(classNum);
  }
}
