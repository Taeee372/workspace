package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.service.BookService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {
  private BookService bookService;

  public BookController(BookService bookService){
    this.bookService = bookService;
  }
  
  @PostMapping("")
  public void regBook(@RequestBody BookDTO bookDTO){
    bookService.regBook(bookDTO);
  }
}
