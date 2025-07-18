package com.green.ExamPractice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int cnt;

  public BoardDTO(){}

  public BoardDTO(int boardNum, String title, String writer, String content, int cnt) {
    this.boardNum = boardNum;
    this.title = title;
    this.writer = writer;
    this.content = content;
    this.cnt = cnt;
  }
}
