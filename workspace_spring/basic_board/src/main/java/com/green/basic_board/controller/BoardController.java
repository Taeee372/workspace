package com.green.basic_board.controller;

import com.green.basic_board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

//객체생성 + controller 역할을 부여
@RestController
public class BoardController {
  private BoardService boardService;

  @Autowired
  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  //스프링에서 실행한 쿼리문은 자동커밋됨 등록이든 삭제든 뭐든!!!
  //게시글을 등록하는 api
  @PostMapping("/boards")
  public void insertBoard(){
    boardService.regBoard();
  }

  //게시글을 삭제하는 api
  @DeleteMapping("/boards")
  public void deleteBoard(){
    boardService.removeBoard();
  }

  //게시글을 수정하는 api
  @PutMapping("/boards")
  public void updateBoard(){
    boardService.updateBoard();
  }

}
