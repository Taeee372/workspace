package com.green.backend_shop.buy.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BuyDTO {
  private int buyNum;
  private int bookNum;
  private String memId;
  private LocalDateTime buyDate;
  private int buyCnt;

  //react에서 전달되는 cartNum 목록 데이터(cartNumList)를 받기 위해 선언한 변수
  private List<Integer> cartNumList;
}
