package com.green.backend_shop.book.mapper;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.dto.BookImgDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
  //BOOK 테이블에 등록할 BOOK_NUM 조회
  public int getNextBookNum();

  //도서 등록
  public void insertBook(BookDTO bookDTO);

  //도서 이미지 등록
  public void insertImgs(List<BookImgDTO> bookImgList);

  //도서 목록 조회
  public List<BookDTO> getBookList();

  //도서 상세 조회
  public BookDTO getBookDetail(int bookNum);

}
