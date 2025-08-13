package com.green.backend_student.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class StuDTO {
  private int stuNum;
  private String stuName;
  private int stuAge;
  private int classNum;
  private ClassDTO classDTO; //한 학생은 하나의 학급을 가지고 있다 (1 : 1 관계)
  //private List<ClassDTO> classList; -> 한 학생이 여러개의 학급을 가지고 있을 경우 (1 : n 관계)
}
