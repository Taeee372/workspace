package com.green.legacy_board.mapper;

import com.green.legacy_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

  public List<BoardDTO> getList();

  public void regBoard(BoardDTO boardDTO);

  public BoardDTO getBoardDetail(int boardNum);
}
