package com.green.restApi_test.controller;

import com.green.restApi_test.BookDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {

  @GetMapping("/books")
  public List<BookDTO> getBooksInfo(){
    System.out.println("모든 도서 정보 조회");

    List<BookDTO> bookList = new ArrayList<>();
    bookList.add(new BookDTO(1, "자바 기초", "김개발", "자바에 대한 기초를 배울 수 있습니다", 2000));
    bookList.add(new BookDTO(2, "웹 페이지 제작하기", "윤개발", "웹 페이지 제작에 대한 기초를 배울 수 있습니다", 15000));
    bookList.add(new BookDTO(3, "리액트 따라하기", "박개발", "리액트에 대한 기초를 배울 수 있습니다", 3000));
    bookList.add(new BookDTO(4, "동남아 여행", "김여행", "동남아로 떠나봅시다", 15000));
    bookList.add(new BookDTO(5, "한식 레시피", "이요리", "맛있는 한식 레시피", 20000));

    return bookList;
  }

  @GetMapping("/books/{bookNum}")
  public String getBookInfo(@PathVariable("bookNum") int bookNum){
    System.out.println("하나의 도서 정보 조회");
    return "하나의 도서 정보 조회";
  }

  @PostMapping("/books")
  public String insertBookInfo(@RequestBody BookDTO bookDTO){
    System.out.println("도서 정보 등록");
    return "도서 정보 등록";
  }

  @DeleteMapping("/books/{bookNum}")
  public String deleteBookInfo(@PathVariable("bookNum") int bookNum){
    System.out.println("도서 정보 삭제");
    return "도서 정보 삭제";
  }

  @PutMapping("/books/{bookNum}")
  public String updateBookInfo(@PathVariable("bookNum") int bookNum, @RequestBody BookDTO bookDTO){
    System.out.println("도서 정보 수정");
    return "도서 정보 수정";
  }

}
