package com.green.first;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {
  private String name;
  private int korScore;
  private int engScore;

  public Student(String name, int korScore, int engScore) {
    this.name = name;
    this.korScore = korScore;
    this.engScore = engScore;
  }

}
