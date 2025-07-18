package com.green.rest_test.controller;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDTO {
  private int itemNum;
  private String itemName;
  private int price;
  private int cnt;
  private String orderID;

  public OrderDTO(){}

  public OrderDTO(int itemNum, String itemName, int price, int cnt, String orderID) {
    this.itemNum = itemNum;
    this.itemName = itemName;
    this.price = price;
    this.cnt = cnt;
    this.orderID = orderID;
  }
}
