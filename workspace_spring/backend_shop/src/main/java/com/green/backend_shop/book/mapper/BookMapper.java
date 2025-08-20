package com.green.backend_shop.book.mapper;

import com.green.backend_shop.book.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  //도서 등록
  public void regBook(BookDTO bookDTO);

  //도서 목록 조회
  public List<BookDTO> getBookList();

  //상세 도서 정보 조회
  public BookDTO getBook(int boobNum);
}
