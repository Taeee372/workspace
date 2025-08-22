package com.green.backend_shop.cart.mapper;

import com.green.backend_shop.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
  //장바구니 추가
  public void insertCart(CartDTO cartDTO);

  //장바구니 목록 조회
  public List<CartDTO> getCartList(String memId);

  //장바구니 상품 삭제
  public void deleteBook(int cartNum);
}
