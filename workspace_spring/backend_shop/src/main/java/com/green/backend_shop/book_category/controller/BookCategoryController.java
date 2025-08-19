package com.green.backend_shop.book_category.controller;

import com.green.backend_shop.book_category.dto.BookCategoryDTO;
import com.green.backend_shop.book_category.service.BookCategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class BookCategoryController {
  private BookCategoryService bookCategoryService;

  public BookCategoryController(BookCategoryService bookCategoryService){
    this.bookCategoryService = bookCategoryService;
  }

  //도서 카테고리 조회
  @GetMapping("")
  public List<BookCategoryDTO> getBookCateName(){
    return bookCategoryService.getBookCateName();
  }
}
