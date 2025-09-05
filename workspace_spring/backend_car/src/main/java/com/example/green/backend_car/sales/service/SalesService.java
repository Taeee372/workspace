package com.example.green.backend_car.sales.service;

import com.example.green.backend_car.sales.dto.SalesDTO;
import com.example.green.backend_car.sales.mapper.SalesMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SalesService {
  private final SalesMapper salesMapper;

  //판매 정보 등록
  public void regSaleInfo(SalesDTO salesDTO){
   salesMapper.regSaleInfo(salesDTO);
  }
}
