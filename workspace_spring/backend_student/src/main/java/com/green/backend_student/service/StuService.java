package com.green.backend_student.service;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import com.green.backend_student.mapper.StuMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StuService {
  private StuMapper stuMapper;

  public StuService(StuMapper stuMapper){
    this.stuMapper = stuMapper;
  }

  //학급 목록 조회
  public List<ClassDTO> selectClassList(){
    return stuMapper.selectClassList();
  }

  //학생 정보 조회
  public List<StuDTO> selectStuList(){
    return stuMapper.selectStuList();
  }

  //반에 따른 학생 정보 조회
  public List<StuDTO> selectStuListClass(int classNum){
    return stuMapper.selectStuListClass(classNum);
  }
}
