package com.green.basic_board.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

//BASIC_BOARD 테이블과 데이터 전송을 하기 위한 클래스
//BASIC_BOARD 테이블의 컬럼과 매칭되는 멤버변수를 생성
@Getter
@Setter
@ToString
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int readCnt;
  private LocalDateTime createDate;
}
