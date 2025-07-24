package com.green.practice;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChickenOrderDTO {
  private String chicken;
  private int cnt;
  private String addr;
  private String addrDetail;
  private String request;

  public ChickenOrderDTO(){}

  public ChickenOrderDTO(String chicken, int cnt, String addr, String addrDetail, String request) {
    this.chicken = chicken;
    this.cnt = cnt;
    this.addr = addr;
    this.addrDetail = addrDetail;
    this.request = request;
  }

  @Override
  public String toString() {
    return "치킨 주문 : " +
            "chicken='" + chicken + '\'' +
            ", cnt=" + cnt +
            ", addr='" + addr + '\'' +
            ", addrDetail='" + addrDetail + '\'' +
            ", request='" + request + '\'' +
            ' ';
  }
}
