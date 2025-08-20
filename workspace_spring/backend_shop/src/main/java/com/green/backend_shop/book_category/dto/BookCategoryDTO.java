package com.green.backend_shop.book_category.dto;

import lombok.Data;


@Data
public class BookCategoryDTO {
  private int cateNum;
  private String cateName;


}

//  public void aaa(){
//    int num = 0;
//    num = 10;
//
//    final int age = 10; //final : 한 번 값이 결정되면 바꿀 수 없음
//    age = 20; //바꾸려고 하면 오류난다
//    상수가 되려면 초기값이 필요하다, 초기값이 선언되지 않아도 오류남
//  }