package com.green.backend_shop.buy.mapper;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BuyMapper {
  //상품 상세페이지에서 구매하기
  public void insertBuy(BuyDTO buyDTO);

  //장바구니 페이지에서 구매하기
  public void buyAll(BuyDTO buyDTO);

  //관리자 구매이력조회 페이지의 구매목록조회
  public List<BuyDTOForAdmin> getBuyListForAdmin();

  //구매내역상세 조회(BuyListModal)
  public List<BuyDTO> getBuyDetail(int orderNum);
}
