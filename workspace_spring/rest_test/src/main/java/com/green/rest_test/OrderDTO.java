package com.green.rest_test;

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


  @Override
  public String toString() {
    return "OrderDTO{" +
            "itemNum=" + itemNum +
            ", itemName='" + itemName + '\'' +
            ", price=" + price +
            ", cnt=" + cnt +
            ", orderID='" + orderID + '\'' +
            '}';
  }






}
