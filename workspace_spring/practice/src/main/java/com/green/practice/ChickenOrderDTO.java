package com.green.practice;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ChickenOrderDTO {
  private String chicken;
  private int cnt;
  private String addr;
  private String addrDetail;
  private String request;

  //DTO(Data Transfer Object) - 데이터를 전송할 때 사용하는 객체
  public ChickenOrderDTO(){}

  public ChickenOrderDTO(String chicken, int cnt, String addr, String addrDetail, String request) {
    this.chicken = chicken;
    this.cnt = cnt;
    this.addr = addr;
    this.addrDetail = addrDetail;
    this.request = request;
  }

}
