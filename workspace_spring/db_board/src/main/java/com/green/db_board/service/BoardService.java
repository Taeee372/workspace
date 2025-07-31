package com.green.db_board.service;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.mapper.BoardMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
  private BoardMapper boardMapper;

  public BoardService(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }

  //모든 게시글 조회
  public List<BoardDTO> getBoardAll(){
    return boardMapper.getBoardAll();
  }

  //게시글 등록
  public int regBoard(BoardDTO boardDTO){
    return boardMapper.regBoard(boardDTO);
  }

  //게시글 하나 조회
  public BoardDTO getBoard(int boardNum){
    return boardMapper.getBoard(boardNum);
  }

  //게시글 수정
  public int updateBoard(BoardDTO boardDTO){
    return boardMapper.updateBoard(boardDTO);
  }

  //게시글 삭제
  public int deleteBoard(int boardNum){
    return boardMapper.deleteBoard(boardNum);
  }

  //제목 기준 게시글 검색
  public List<BoardDTO> searchTitle(String title){
    return boardMapper.searchTitle(title);
  }

  //작성자 기준 게시글 검색
  public List<BoardDTO> searchWriter(String writer){
    return boardMapper.searchWriter(writer);
  }
}
