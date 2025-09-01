package com.green.backend_shop.cart.mapper;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.cart.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
  //장바구니 추가
  public void insertCart(CartDTO cartDTO);

  //장바구니 목록 조회
  public List<CartDTO> getCartList(String memId);

  //장바구니에 등록하려는 상품이 현재 등록되어 있는지 확인
  public String getCartNum(CartDTO cartDTO);

  //장바구니 수량 변경(도서 상세페이지에서)
  public void updateCartCnt(CartDTO cartDTO);

  //장바구니 상품 삭제
  public void deleteCart(int cartNum);

  //장바구니 수량 변경(장바구니 페이지에서)
  public void updateCart(CartDTO cartDTO);

  //장바구니에서 구매하면 장바구니 목록에서 상품 삭제
  public void deleteCartAll(BuyDTO buyDTO);
  //public void deleteCartAll(List<Integer> cartNumList);
  //둘 다 가능하지만 List로 넘길려면 변수명이 collection 명과 같아야 한다

  //cart에 CartService랑 CartController 만들 필요 없이 장바구니 구매하는 부분(BuyService)에 추가해주면 됨
  //구매와 목록에서 삭제가 함께 실행되면 되니까 굳이 따로 만들어 줄 필요가 없다!
  // => BuyService에서 구매(buyAll)와 목록에서 삭제(deleteCartAll)가 동시에 실행
}
