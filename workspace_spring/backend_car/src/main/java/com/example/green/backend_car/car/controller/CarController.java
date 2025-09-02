package com.example.green.backend_car.car.controller;

import com.example.green.backend_car.car.dto.CarDTO;
import com.example.green.backend_car.car.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
