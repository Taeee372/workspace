package com.green.backend_shop.book.mapper;

import com.green.backend_shop.book.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  //도서 등록
  public void insertBook(BookDTO bookDTO);

  //도서 목록 조회
  public List<BookDTO> getBookList();

  //도서 상세 조회
  public BookDTO getBookDetail(int bookNum);

}
