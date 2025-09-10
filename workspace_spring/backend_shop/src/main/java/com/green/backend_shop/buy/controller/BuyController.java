package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.dto.SearchBuyDTO;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

  //관리자 구매이력조회 페이지의 구매목록조회 api + 검색 기능
  @GetMapping("/buy-list-admin")
  public List<BuyDTOForAdmin> getBuyListForAdmin(SearchBuyDTO searchBuyDTO){
    System.out.println(searchBuyDTO);
    return buyService.getBuyListForAdmin(searchBuyDTO);
  }

  //구매내역상세 조회(BuyListModal)
  @GetMapping("/{orderNum}")
  public List<BuyDTO> getBuyDetail(@PathVariable("orderNum") int orderNum){
    return buyService.getBuyDetail(orderNum);
  }

  //최근 10일 날짜 조회
  @GetMapping("/date")
  public List<String> getDate(){
    return buyService.getDate();
  }

  //최근 10일 매출 조회
  @GetMapping("/sales")
  public List<Integer> getRecentSales(){
    return buyService.getRecentSales();
  }
}
