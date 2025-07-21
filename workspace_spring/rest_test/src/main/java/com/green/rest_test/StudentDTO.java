package com.green.rest_test;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDTO {
  private String name;
  private int korScore;
  private int engScore;
  private String addr;

  public StudentDTO(){}

  public StudentDTO(String name, int korScore, int engScore, String addr) {
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
    this.addr = addr;

  }

  @Override
  public String toString() {
    return "StudentDTO{" +
            "name='" + name + '\'' +
            ", korScore=" + korScore +
            ", engScore=" + engScore +
            ", addr='" + addr + '\'' +
            '}';
  }
}
