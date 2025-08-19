package com.green.backend_shop.book.service;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.mapper.BookMapper;
import org.springframework.stereotype.Service;

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
}
