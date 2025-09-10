package com.green.backend_shop.buy.service;

import com.green.backend_shop.buy.dto.BuyDTO;
import com.green.backend_shop.buy.dto.BuyDTOForAdmin;
import com.green.backend_shop.buy.dto.SearchBuyDTO;
import com.green.backend_shop.buy.mapper.BuyMapper;
import com.green.backend_shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuyService {
  private final BuyMapper buyMapper;
  private final CartMapper cartMapper;

  //상품 상세페이지에서 구매하기
  public void insertBuy(BuyDTO buyDTO){
    buyMapper.insertBuy(buyDTO);
  }



  // Transaction : (쉽게 말하자면)실행되는 여러 쿼리를 하나의 그룹으로 묶어서 하나의 쿼리처럼 실행되는 문법
  // 둘 다 성공해야 하나의 기능이 완성된 거기 때문에, 둘 중 하나가 실패 => 모두 실패한 걸로 간주
  // 하나의 메소드에 같이 실행하려는 쿼리가 다 같이 들어어있어야 컨트롤 가능
  // ex) insertBuy 메소드에 buyAll 쿼리, buyAll 메소드에 deleteCartAll 쿼리가 있다면, 두 쿼리는 함께 컨트롤 할 수 없다
  //     => deleteCartAll에 두 쿼리가 같이 들어있어야 함
  // 여러 쿼리가 함께 실행되는데, 그 쿼리가 데이터를 변경시키는 경우(insert, update, delete)에는 Transaction 넣어줘야 한다.

  // 구매는
  // 1. SHOP_BUY 테이블에 INSERT 쿼리와
  // 2. SHOP_CART 테이블에 DELETE 쿼리
  // 두 쿼리의 실행으로 이루어져 있다.
  // 두 쿼리는 둘 다 성공해야 성공으로 판단할 수 있기 때문에
  // Transaction을 사용하여 두 쿼리를 하나의 묶음으로 간주해야 한다.
  // Transactional 어노테이션이 선언된 메서드 내의 모든 쿼리는 하나의 묶음으로 간주함
  // -> 메서드 내 모든 쿼리실행 명령어가 정상 작동 되어야지만 commit을 진행함.
  // rollbackFor : 어떤 경우에 롤백을 진행할지 설정할 수 있는 속성
  // rollbackFor = Exception.class
  // -> Exception.class : 모든 오류에 대해(이유 불문하고) 오류가 발생하면 무조건 롤백 시키겠다 라는 의미

  //장바구니 페이지에서 구매하기 & 구매하면 장바구니 목록에서 상품 삭제되기
  @Transactional(rollbackFor = Exception.class)
  public void buyAll(BuyDTO buyDTO){
    //SHOP_BUY 테이블에 구매 정보 INSERT
    buyMapper.buyAll(buyDTO);

    //구매한 장바구니 정보는 SHOP_CART 테이블에서 DELETE
    cartMapper.deleteCartAll(buyDTO);
  }

  //관리자 구매이력조회 페이지의 구매목록조회 + 검색 기능
  public List<BuyDTOForAdmin> getBuyListForAdmin(SearchBuyDTO searchBuyDTO){
    return buyMapper.getBuyListForAdmin(searchBuyDTO);
  }

  //구매내역상세 조회(BuyListModal)
  public List<BuyDTO> getBuyDetail(int orderNum){
   return buyMapper.getBuyDetail(orderNum);
  }

  //최근 10일 날짜 조회
  public List<String> getDate(){
    return buyMapper.getDate();
  }

  //최근 10일 매출 조회
  public List<Integer> getRecentSales(){
    return buyMapper.getRecentSales();
  }
}
