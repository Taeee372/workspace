package com.green.legacy_board.mapper;

import com.green.legacy_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

  public List<BoardDTO> getList();
  public void write(BoardDTO boardDTO);
  public BoardDTO getDetail(int boardNum);
  public void delete(int boardNum);
  public void update(BoardDTO boardDTO);

}





