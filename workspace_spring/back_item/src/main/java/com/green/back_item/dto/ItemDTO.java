package com.green.back_item.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ItemDTO {
  private int itemNum;
  private String itemCategory;
  private String itemName;
  private int itemPrice;
  private String itemIntro;
  private String itemStatus;
  private LocalDateTime regDate;
}
