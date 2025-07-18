package com.green.rest_test.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

  //1. 모든 주문정보 조회
  @GetMapping("/orders")
  public List<OrderDTO> getOrderInfoList(){
    List<OrderDTO> orderInfoList = new ArrayList<>();
    orderInfoList.add(new OrderDTO(1, "맨투맨 긴팔 티셔츠", 12000, 3, "gildong"));
    orderInfoList.add(new OrderDTO(2, "롱 패딩", 55000, 1, "kim"));
    orderInfoList.add(new OrderDTO(3, "오버핏 니트", 25000, 2, "park"));
    orderInfoList.add(new OrderDTO(4, "맨투맨 반팔 티셔츠", 20000, 3, "lee"));
    orderInfoList.add(new OrderDTO(5, "데님 청바지", 15000, 2, "abc"));

    return orderInfoList;
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
