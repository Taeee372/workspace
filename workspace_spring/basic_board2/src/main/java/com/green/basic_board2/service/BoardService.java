package com.green.basic_board2.service;

import com.green.basic_board2.dto.BoardDTO;
import com.green.basic_board2.mapper.BoardMapper;
import lombok.Setter;
import org.apache.tomcat.util.net.openssl.OpenSSLUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
  private BoardMapper boardMapper;

  //생성자가 하나밖에 없으면 자동으로 Autowired를 붙여줌
  public BoardService(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }

  //게시글 등록 메서드
  public void insertBoard(BoardDTO boardDTO){
    System.out.println("게시글 등록을 시작합니다.");
    boardMapper.insertBoard(boardDTO);
    System.out.println("등록 완료!");
  }

  //게시글 수정 메서드
  public int updateBoard(BoardDTO boardDTO){
    //update 쿼리 실행 결과 영향을 받은 행의 갯수(가 result에 들어오는 것)
    int result = boardMapper.updateBoard(boardDTO);
    return result;
  }

  //글번호를 기준으로 게시글을 삭제하는 메서드
  public int deleteBoard(int boardNum){
   int result = boardMapper.deleteBoard(boardNum);
   return result;
  }

  public List<BoardDTO> selectBoard(){
    return boardMapper.selectBoard();
  }

  public BoardDTO selectOneBoard(int boardNum){
    return boardMapper.selectOneBoard(boardNum);
  }
}
