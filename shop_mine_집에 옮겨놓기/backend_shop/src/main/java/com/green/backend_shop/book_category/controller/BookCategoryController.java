package com.green.backend_shop.book_category.controller;

import com.green.backend_shop.book_category.dto.BookCategoryDTO;
import com.green.backend_shop.book_category.service.BookCategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/categories")
public class BookCategoryController {
  private BookCategoryService bookCategoryService;

  public BookCategoryController(BookCategoryService bookCategoryService){
    this.bookCategoryService = bookCategoryService;
  }

  //도서 카테고리 조회
  @GetMapping("")
  public List<BookCategoryDTO> getCateList(){
    log.info("@slf4j와 함께 쓰고 로그를 띄울 수 있다(기록할 수 있다)");
    return bookCategoryService.getCateList();
  }
}
