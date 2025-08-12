package com.green.backend_student.mapper;

import com.green.backend_student.dto.ClassDTO;
import com.green.backend_student.dto.StuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StuMapper {
  //학급 목록 조회
  public List<ClassDTO> selectClassList();

  //학생 목록 조회
  public List<StuDTO> selectStuList();

  //반에 따른 학생 정보 조회
  public List<StuDTO> selectStuListClass(int classNum);
}
