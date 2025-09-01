package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/buys")
@RequiredArgsConstructor
public class BuyController {
  private final BuyService buyService;

  //상품 상세페이지에서 구매하기 api
  @PostMapping("")
  public void insertBuy(@RequestBody BuyDTO buyDTO){
    buyService.insertBuy(buyDTO);
  }

  //장바구니 페이지에서 구매하기 api
  @PostMapping("/all")
  public void buyAll(@RequestBody BuyDTO buyDTO){
    buyService.buyAll(buyDTO);
    //System.out.println(buyDTO);
  }
}
