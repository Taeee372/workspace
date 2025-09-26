package com.green.backend_shop.buy.controller;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.dto.SearchBuyDTO;
import com.green.backend_shop.buy.service.BuyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buys")
@RequiredArgsConstructor
public class BuyController {
  private final BuyService buyService;

  //도서 상세페이지에서 구매하기 api
  @PostMapping("")
  public ResponseEntity<?> insertBuy(@RequestBody BuyDTO buyDTO){
    try {
      //실행 코드
      buyService.insertBuy(buyDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      //오류가 발생하면 실행할 코드
      e.printStackTrace(); //리액트로 따지면 e => console.log(e)와 같은 코드
      return ResponseEntity
              .status(HttpStatus.INTERNAL_SERVER_ERROR) //자바(서버)에서 오류난 거기 때문에 500 오류 보내기
              .body("구매하기 쿼리 실행 중 오류가 발생했습니다.");
    }
  }

  //장바구니 페이지에서 구매하기 api
  @PostMapping("/all")
  public void buyAll(@RequestBody BuyDTO buyDTO){
    buyService.buyAll(buyDTO);
    //System.out.println(buyDTO);
  }

  //관리자 구매이력조회 페이지의 구매목록조회 api + 검색 기능
  @GetMapping("/buy-list-admin")
  public ResponseEntity<?> getBuyListForAdmin(SearchBuyDTO searchBuyDTO){
    System.out.println(searchBuyDTO);

    try {
      //구매 목록
      List<BuyDTOForAdmin> list = buyService.getBuyListForAdmin(searchBuyDTO);
      return ResponseEntity.status(HttpStatus.OK).body(list);
    }catch (Exception e){
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
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
