package com.green.restful.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class BoardController {

  //게시글 목록 조회 API
  //게시글 목록 정보를 react로 전달하기 위해 만든 기능
  @GetMapping("/boards")
  public String getBoardList(){
    System.out.println("게시글 목록 조회 실행");
    return "목록 조회 성공";
  }

  //하나의 게시글 정보를 조회하는 API
  //url에 변수를 작성하려면 {}를 사용한다.
  //{} 안의 변수명은 마음대로 지정(이지만 알아먹기 쉽게 작성하자)
  //url에 전달되는 데이터는 PathVariable 어노테이션으로 받을 수 있다.
  //문법 - @PathVariable({}안에 쓴 변수명) 자료형 변수명의 데이터를 받을 변수
  @GetMapping("/boards/{boardNum}")
  public String getBoard(@PathVariable("boardNum") int a){
    System.out.println("하나의 게시글 조회 실행");
    System.out.println("a = " + a);
    return "하나의 게시글 조회 성공";
  }

  @GetMapping("/boards/{boardNum}/{title}")
  public String getBoard2(@PathVariable("boardNum") int a, @PathVariable("title") String b){
    System.out.println(a);
    System.out.println(b);
    return "성공";
  }

  //게시글 등록 API
  //요청 바디에 담겨 전달되는 데이터는 RequestBody 어노테이션으로 받을 수 있다.
  //데이터를 받는 클래스의 멤버변수명이 요청 바디에 담겨 넘어오는 key와 동일하면 데이터를 받을 수 있다.
  @PostMapping("/boards")
  public String insertBoard(@RequestBody BoardDTO boardDTO){
    //1. 화면에서 입력된 게시글 정보를 가져온다.
    System.out.println(boardDTO.toString());

    //2. 가져온 데이터를 가지고 insert 쿼리를 실행한다.
    return "등록 성공";
  }

  //하나의 게시글 삭제 API
  @DeleteMapping("/boards/{boardNum}")
  public String deleteBoard(@PathVariable("boardNum") int a){
    System.out.println("a = " + a);
    return "삭제 성공";
  }

  //하나의 게시글에 제목, 내용을 수정 API
  @PutMapping("/boards/{boardNum}")
  public String updateBoard(@RequestBody BoardDTO boardDTO, @PathVariable("boardNum") int a){
    System.out.println("a = " + a);
    System.out.println(boardDTO);
    return "수정 성공";
  }
}
