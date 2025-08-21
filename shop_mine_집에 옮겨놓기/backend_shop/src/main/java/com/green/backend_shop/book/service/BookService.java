package com.green.backend_shop.book.service;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.mapper.BookMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
  private BookMapper bookMapper;

  public BookService(BookMapper bookMapper){
    this.bookMapper = bookMapper;
  }

  //도서 등록
  public void regBook(BookDTO bookDTO){
    bookMapper.regBook(bookDTO);
  }

  //도서 목록 조회
  public List<BookDTO> getBookList(){
    return bookMapper.getBookList();
  }

  //상세 도서 정보 조회
  public BookDTO getBook(int bookNum){
    return bookMapper.getBook(bookNum);
  }
}
