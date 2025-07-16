package com.green.restful.controller;

import lombok.Getter;
import lombok.Setter;

//제목, 작성자, 내용을 저장할 수 있는 자료형
@Getter
@Setter
public class BoardDTO {
  private  String title;
  private String writer;
  private String content;

  @Override
  public String toString() {
    return "BoardDTO{" +
            "title='" + title + '\'' +
            ", writer='" + writer + '\'' +
            ", content='" + content + '\'' +
            '}';
  }
}
