package com.green.legacy_board.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int readCnt;
  private LocalDateTime createDate;
}
