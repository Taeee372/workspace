package com.green.backend_shop.cart.controller;

import com.green.backend_shop.cart.dto.CartDTO;
import com.green.backend_shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
@RequiredArgsConstructor
public class CartController {
  private final CartService cartService;

  //장바구니 등록 api
  @PostMapping("")
  public void insertCart(@RequestBody CartDTO cartDTO){
//    System.out.println(cartDTO);
    cartService.insertCart(cartDTO);
  }

  //장바구니 목록 조회 api
  @GetMapping("/{memId}")
  public List<CartDTO> getCartList(@PathVariable("memId") String memId){
    return cartService.getCartList(memId);
  }

  //장바구니 상품 삭제
  @DeleteMapping("/{cartNum}")
  public void deleteBook(@PathVariable("cartNum") int cartNum){
    cartService.deleteBook(cartNum);
  }

}
