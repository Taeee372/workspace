package com.green.rest_test.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {

  //1. 모든 주문정보 조회
  @GetMapping("/orders")
  public String getOrdersInfo(){
    return "모든 주문정보 조회";
  }

  //2. 하나의 주문정보 조회
  @GetMapping("/orders/{itemNum}")
  public String getOrderInfo(@PathVariable("itemNum") int a){
    return "하나의 주문정보 조회";
  }

  //3. 하나의 주문정보 등록
  @PostMapping("/orders")
  public String insertOrder(@RequestBody OrderDTO orderDTO){
    return "주문정보 등록";
  }

  //4. 하나의 주문정보 삭제
  @DeleteMapping("/orders/{itemNum}")
  public String deleteOrder(@PathVariable("itemNum") int a){
    return "주문정보 삭제";
  }

  //5. 하나의 주문정보에서 상품명과 상품가격 수정
  @PutMapping("/orders/{itemNum}")
  public String updateOrder(@RequestBody OrderDTO orderDTO, @PathVariable("itemNum") int a){
    return "주문정보 수정";
  }

}
