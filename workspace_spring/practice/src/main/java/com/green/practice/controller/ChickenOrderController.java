package com.green.practice.controller;

import com.green.practice.ChickenOrderDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChickenOrderController {

  @PostMapping("/orders")
  public String insertChickenOrder(@RequestBody ChickenOrderDTO chickenOrderDTO){
    System.out.println(chickenOrderDTO);
    return "맛있는 치킨";
  }

}
