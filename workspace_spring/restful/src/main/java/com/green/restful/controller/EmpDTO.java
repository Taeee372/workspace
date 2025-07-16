package com.green.restful.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmpDTO {
  private String ename;
  private String job;
  private int sal;

  @Override
  public String toString() {
    return "EmpDTO{" +
            "ename='" + ename + '\'' +
            ", job='" + job + '\'' +
            ", sal=" + sal +
            '}';
  }
}
