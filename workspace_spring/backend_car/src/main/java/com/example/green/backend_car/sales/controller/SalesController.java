package com.example.green.backend_car.sales.controller;

import com.example.green.backend_car.sales.dto.SalesDTO;
import com.example.green.backend_car.sales.mapper.SalesMapper;
import com.example.green.backend_car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SalesController {
  private final SalesService salesService;

  //판매 정보 등록
  @PostMapping("")
  public void regSaleInfo(@RequestBody SalesDTO salesDTO){
    salesService.regSaleInfo(salesDTO);
  }
}
