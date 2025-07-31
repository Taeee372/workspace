package com.green.db_board.controller;

import com.green.db_board.dto.BoardDTO;
import com.green.db_board.service.BoardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {
  private BoardService boardService;

  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  //모든 게시글 조회
  @GetMapping("")
  public List<BoardDTO> getBoardAll(){
    return boardService.getBoardAll();
  }

  //게시글 등록
  @PostMapping("")
  public int regBoard(@RequestBody BoardDTO boardDTO){
    System.out.println(boardDTO);
    return boardService.regBoard(boardDTO);
  }

  //게시글 하나 조회
  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum){
    return boardService.getBoard(boardNum);
  }

  //게시글 수정
  @PutMapping("/{boardNum}")
  public int updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
    boardDTO.setBoardNum(boardNum);
    return boardService.updateBoard(boardDTO);
  }

  //게시글 삭제
  @DeleteMapping("/{boardNum}")
  public int deleteBoard(@PathVariable("boardNum") int boardNum){
    return boardService.deleteBoard(boardNum);
  }

  //제목 기준 게시글 검색
  @GetMapping("/title/{title}")
  public List<BoardDTO> searchTitle(@PathVariable("title") String title){
    return boardService.searchTitle(title);
  }

  //작성자 기준 게시글 검색
  @GetMapping("/writer/{writer}")
  public List<BoardDTO> searchWriter(@PathVariable("writer") String writer){
    return boardService.searchWriter(writer);
  }
}
