package com.green.backend_shop.book_category.service;

import com.green.backend_shop.book_category.dto.BookCategoryDTO;
import com.green.backend_shop.book_category.mapper.BookCategoryMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookCategoryService {
  private BookCategoryMapper bookCategoryMapper;

  public BookCategoryService(BookCategoryMapper bookCategoryMapper){
    this.bookCategoryMapper = bookCategoryMapper;
  }

  //도서 카테고리 조회
  public List<BookCategoryDTO> getBookCateName(){
    return bookCategoryMapper.getBookCateName();
  }
}
