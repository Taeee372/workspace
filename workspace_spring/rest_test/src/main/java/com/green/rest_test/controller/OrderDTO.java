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
}
