package com.green.backend_shop.buy.dto;

import lombok.Data;

//구매 목록 페이지에서 전달되는 검색 데이터를 담기 위한 클래스
//보통 검색 기능 만들 때는 데이터를 넣을 DTO를 따로 만든다
@Data
public class SearchBuyDTO {
  //넘어오는 데이터가 문자열인데, int로 정의할 경우 빈문자는 받을 수 없기 때문에 자료형 String으로 주기
  //어차피 디비와 자바에서는 자료 받을 때 문자열 안에 숫자 넣어도 숫자로 인식해서 받아준다
  private String orderNum;
  private String memId;
  private String fromDate;
  private String toDate;
}
