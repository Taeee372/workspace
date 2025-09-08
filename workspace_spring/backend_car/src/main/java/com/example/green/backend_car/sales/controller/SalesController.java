package com.example.green.backend_car.sales.controller;

import com.example.green.backend_car.sales.dto.SalesDTO;
import com.example.green.backend_car.sales.mapper.SalesMapper;
import com.example.green.backend_car.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

  //판매 목록 조회
  @GetMapping("")
  public List<SalesDTO> getSaleList(){
    return salesService.getSaleList();
  }
}
