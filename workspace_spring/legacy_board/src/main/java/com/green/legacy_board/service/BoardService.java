package com.green.legacy_board.service;

import com.green.legacy_board.dto.BoardDTO;
import com.green.legacy_board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
  private final BoardMapper boardMapper;

  public List<BoardDTO> getBoardList(){
    return boardMapper.getList();
  }

  public void regBoard(BoardDTO boardDTO){
    boardMapper.regBoard(boardDTO);
  }

  public BoardDTO getBoardDetail(int boardNum){
    return boardMapper.getBoardDetail(boardNum);
  }
}
