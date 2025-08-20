package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/books")
public class BookController {
  private BookService bookService;

  public BookController(BookService bookService){
    this.bookService = bookService;
  }
  
  @PostMapping("")
  public void regBook(@RequestBody BookDTO bookDTO){
    log.info(bookDTO.toString());
//    log.info("전달받은 데이터 {}", bookDTO); // {} 안에 변수가 들어오는데 , 뒤에 있는 변수가 드간다
    bookService.regBook(bookDTO);
  }

  //도서 목록 조회
  @GetMapping("")
  public List<BookDTO> getBookList(){
    return bookService.getBookList();
  }

  //상세 도서 정보 조회
  @GetMapping("/{bookNum}")
  public BookDTO getBook(@PathVariable("bookNum") int bookNum){
    return bookService.getBook(bookNum);
  }
}
