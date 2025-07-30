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

  public List<BoardDTO> getBoardAll(){
    return boardMapper.getBoardAll();
  }

  public int regBoard(BoardDTO boardDTO){
    return boardMapper.regBoard(boardDTO);
  }
}
