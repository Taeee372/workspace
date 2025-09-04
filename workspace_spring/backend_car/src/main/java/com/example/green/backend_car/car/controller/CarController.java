package com.example.green.backend_car.car.controller;

import com.example.green.backend_car.car.dto.CarDTO;
import com.example.green.backend_car.car.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
public class CarController {
  private final CarService carService;

  //차량 등록
  @PostMapping("")
  public void regCar(@RequestBody CarDTO carDTO){
    carService.regCar(carDTO);
  }

  //등록된 차량 목록 조회
  @GetMapping("")
  public List<CarDTO> getCarList(){
    return carService.getCarList();
  }
}
