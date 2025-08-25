package com.green.backend_shop.cart.service;

import com.green.backend_shop.cart.dto.CartDTO;
import com.green.backend_shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
  private final CartMapper cartMapper;

  //int는 null을 받아오지 못한다 => 오류남
  //so 처음에는 CART_CNT 조회했는데 int는 null을 받아오지 못하니
  //null을 받아올 수 있는 String 자료형으로 나오는 MEM_ID로 조회 컬럼 변경

  //장바구니 등록
  // - 현재 장바구니에 등록할 도서가 존재하면 수량을 업데이트
  // - 존재하지 않으면 등록
  public void insertCart(CartDTO cartDTO){
    //현재 선택한 상품이 장바구니에 있는지 확인
    //장바구니에 담으려는 상품이 존재하지 않으면 result = null
    String result = cartMapper.getCartNum(cartDTO);

    //현재 내 장바구니에 없는 상품이면 장바구니에 등록
    if(result == null){
      cartMapper.insertCart(cartDTO);
    }
    //현재 내 장바구니에 있는 상품이면 장바구니의 수량을 업데이트
    else {
      cartMapper.updateCartCnt(cartDTO);
    }
  }

  //장바구니 목록 조회
  public List<CartDTO> getCartList(String memId){
    return cartMapper.getCartList(memId);
  }

  //장바구니 상품 삭제
//  public void deleteBook(int cartNum){
//    cartMapper.deleteBook(cartNum);
//  }
}
