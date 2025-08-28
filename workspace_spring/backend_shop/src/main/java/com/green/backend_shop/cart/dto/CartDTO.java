package com.green.backend_shop.cart.dto;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.dto.BookImgDTO;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CartDTO {
  private int cartNum;
  private int bookNum;
  private int cartCnt;
  private String memId;
  private int totalPrice;
  private LocalDateTime cartDate;
  private BookDTO bookDTO;
  //장바구니에는 책이 하나 들어가있다 (1:1 관계)
  //(장바구니에 여러 권의 책이 들어갈 수는 있지만, 장바구니 버튼을 눌렀을 때는 책 한 권이 들어가니까 1:1 관계)
}
