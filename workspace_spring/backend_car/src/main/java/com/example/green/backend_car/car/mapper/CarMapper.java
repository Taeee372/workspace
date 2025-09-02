package com.example.green.backend_car.car.mapper;

import com.example.green.backend_car.car.dto.CarDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CarMapper {
  //차량 등록
  public void regCar(CarDTO carDTO);
}
