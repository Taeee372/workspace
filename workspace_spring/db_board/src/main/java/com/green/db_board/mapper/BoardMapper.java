package com.green.db_board.mapper;

import com.green.db_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  //모든 게시글 조회
  public List<BoardDTO> getBoardAll();

  //게시글 등록
  public int regBoard(BoardDTO boardDTO);

  //게시글 하나 조회
  public BoardDTO getBoard(int boardNum);

  //게시글 수정
  public int updateBoard(BoardDTO boardDTO);

  //게시글 삭제
  public int deleteBoard(int boardNum);

  //조회수 증가
  public void updateReadCnt(int boardNum);

  //제목 기준 게시글 검색
  public List<BoardDTO> searchTitle(String title);

  //작성자 기준 게시글 검색
  public List<BoardDTO> searchWriter(String writer);
}
