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

  @GetMapping("")
  public List<BoardDTO> getBoardAll(){
    return boardService.getBoardAll();
  }

  @PostMapping("")
  public int regBoard(@RequestBody BoardDTO boardDTO){
    System.out.println(boardDTO);
    return boardService.regBoard(boardDTO);
  }

  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum){
    return boardService.getBoard(boardNum);
  }

  @PutMapping("/{boardNum}")
  public int updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
    boardDTO.setBoardNum(boardNum);
    return boardService.updateBoard(boardDTO);
  }

  @DeleteMapping("/{boardNum}")
  public int deleteBoard(@PathVariable("boardNum") int boardNum){
    return boardService.deleteBoard(boardNum);
  }
}
