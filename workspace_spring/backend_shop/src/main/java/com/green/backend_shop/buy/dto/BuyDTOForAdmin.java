package com.green.backend_shop.buy.dto;

import lombok.Data;

import java.time.LocalDateTime;

//관리자의 구매 이력 조회 페이지에서 조회한 구매 목록을 저장하기 위해 만든 DTO 클래스
@Data
public class BuyDTOForAdmin {
  private int orderNum;
  private String memId;
  private int price;
  private LocalDateTime buyDate;
  private String title;
}
