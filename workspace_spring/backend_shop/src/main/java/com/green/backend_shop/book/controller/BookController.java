package com.green.backend_shop.book.controller;

import com.green.backend_shop.book.dto.BookDTO;
import com.green.backend_shop.book.service.BookService;
import com.green.backend_shop.util.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
  private final BookService bookService;

  //도서 등록 api
  //첨부파일 데이터를 받을 때는 MultipartFile 자료형으로 받아야 한다.
  //첫 번째 매개변수는 'mainImg' 라는 이름으로 전달되는 파일 데이터를 받는다.
  @PostMapping("")
  public void regBook(@RequestParam ("mainImg") MultipartFile mainImg){
    //1. 이미지 파일을 업로드한다(server pc에 파일을 저장한다)
    FileUploadUtil.fileUpload(mainImg);

    //2. book 테이블에 데이터 insert
//    bookService.insertBook(bookDTO);

    //3. book_img 테이블에도 insert



  // log.info(bookDTO.toString()); 얜 걍 출력해본 거
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
