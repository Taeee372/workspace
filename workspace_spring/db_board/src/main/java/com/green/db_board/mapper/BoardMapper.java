package com.green.db_board.mapper;

import com.green.db_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  public List<BoardDTO> getBoardAll();

  public int regBoard(BoardDTO boardDTO);

  public BoardDTO getBoard(int boardNum);

  public int updateBoard(BoardDTO boardDTO);

  public int deleteBoard(int boardNum);
}
