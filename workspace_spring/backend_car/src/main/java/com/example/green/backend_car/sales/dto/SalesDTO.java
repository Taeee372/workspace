package com.example.green.backend_car.sales.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SalesDTO {
  private int salesNum;
  private String buyerName;
  private String buyerTel;
  private String color;
  private LocalDateTime saleDate;
  private int modelNum;
}
