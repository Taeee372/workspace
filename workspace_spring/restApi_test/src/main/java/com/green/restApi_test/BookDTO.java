package com.green.restApi_test;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDTO {
  private int bookNum;
  private String title;
  private String writer;
  private String intro;
  private int price;

  public BookDTO(){}

  public BookDTO(int bookNum, String title, String writer, String intro, int price) {
    this.bookNum = bookNum;
    this.title = title;
    this.writer = writer;
    this.intro = intro;
    this.price = price;
  }

  @Override
  public String toString() {
    return "BookDTO{" +
            "bookNum=" + bookNum +
            ", title='" + title + '\'' +
            ", writer='" + writer + '\'' +
            ", intro='" + intro + '\'' +
            ", price=" + price +
            '}';
  }
}
