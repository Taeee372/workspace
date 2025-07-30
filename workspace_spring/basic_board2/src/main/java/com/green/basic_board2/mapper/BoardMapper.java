package com.green.basic_board2.mapper;

import com.green.basic_board2.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//쿼리의 빈 값은 메서드의 매개변수로 전달함
//빈 값이 여러개라도 매개변수로 하나의 데이터만 전달

//메서드의 리턴타입
//insert, update, delete의 리턴타입 : int, void (int가 정석)
//insert, update, delete 쿼리의 실행 결과(리턴으로 나오는 값)는 쿼리의 영향을 받는 행의 갯수
@Mapper
public interface BoardMapper {
  //게시글 등록 쿼리 실행 추상메서드
  public void insertBoard(BoardDTO boardDTO);

  //게시글 수정 쿼리를 실행하는 추상메서드
  public int updateBoard(BoardDTO boardDTO);

  //글번호를 기준으로 게시글을 삭제하는 추상메서드
  //BoardDTO boardDTO를 써도 상관 없긴 하지만
  //현재 쿼리의 빈 값은 BOARD_NUM 하나밖에 없으니 int boardNum만 써도 충분
  public int deleteBoard(int boardNum);

  public List<BoardDTO> selectBoard();

  public BoardDTO selectOneBoard(int boardNum);

  public List<BoardDTO> searchTitle(String title);

}
