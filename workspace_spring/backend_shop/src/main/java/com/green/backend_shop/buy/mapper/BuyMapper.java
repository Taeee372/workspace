package com.green.backend_shop.buy.mapper;

import com.green.backend_shop.buy.dto.BuyDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BuyMapper {
  //상품 상세페이지에서 구매하기
  public void insertBuy(BuyDTO buyDTO);

  //장바구니 페이지에서 구매하기
  public void buyAll(BuyDTO buyDTO);
}
