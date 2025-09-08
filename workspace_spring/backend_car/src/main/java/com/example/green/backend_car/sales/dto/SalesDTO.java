package com.example.green.backend_car.sales.dto;

import com.example.green.backend_car.car.dto.CarDTO;
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
  private CarDTO carDTO;
}
