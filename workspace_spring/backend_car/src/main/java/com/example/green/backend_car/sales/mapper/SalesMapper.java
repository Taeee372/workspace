package com.example.green.backend_car.sales.mapper;

import com.example.green.backend_car.sales.dto.SalesDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SalesMapper {
  //판매 정보 등록
  public void regSaleInfo(SalesDTO salesDTO);

}
