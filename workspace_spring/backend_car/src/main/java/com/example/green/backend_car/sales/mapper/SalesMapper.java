package com.example.green.backend_car.sales.mapper;

import com.example.green.backend_car.sales.dto.SalesDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalesMapper {
  //판매 정보 등록
  public void regSaleInfo(SalesDTO salesDTO);

  //판매 목록 조회
  public List<SalesDTO> getSaleList();

}
