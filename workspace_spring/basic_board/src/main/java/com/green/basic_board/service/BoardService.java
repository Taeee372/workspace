package com.green.basic_board.service;

import com.green.basic_board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//핵심기능(쿼리 작업)을 제공하는 메서드 구현!
@Service
public class BoardService {
  private BoardMapper boardMapper;

  //생성자를 이용한 의존성 주입(DI)
  //미리 생성된 객체를 매개변수에 주입시켜줌
  @Autowired
  public BoardService(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }

  //모든 게시글을 조회하는 기능
  public void getBoardList(){

  }

  //하나의 게시글을 조회하는 기능
  public void getBoard(){

  }

  //하나의 게시글을 등록하는 기능
  public void regBoard(){
    boardMapper.insertBoard();
  }

  //하나의 게시글을 삭제하는 기능
  public void removeBoard(){
    boardMapper.deleteBoard();
  }

  //하나의 게시글을 수정하는 기능
  public void updateBoard(){
    boardMapper.updateBoard();
  }

}
