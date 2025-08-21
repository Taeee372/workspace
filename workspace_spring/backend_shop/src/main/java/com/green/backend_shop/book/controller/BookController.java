package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
  private final BookService bookService;

  //도서 등록 api
  @PostMapping("")
  public void regBook(@RequestBody BookDTO bookDTO){
    log.info(bookDTO.toString());
    bookService.insertBook(bookDTO);
  }

  //도서 목록 조회 api
  @GetMapping("")
  public List<BookDTO> getBookList(){
    return bookService.getBookList();
  }

  //도서 상세 조회 api
  @GetMapping("/{bookNum}")
  public BookDTO getBookDetail(@PathVariable("bookNum") int bookNum){
    return bookService.getBookDetail(bookNum);
  }

}
