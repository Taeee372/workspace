package com.green.ExamPractice.controller;

import com.green.ExamPractice.dto.BoardDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BoardController {

  @GetMapping("/getBoard")
  public List<BoardDTO> getBoardList(){
    List<BoardDTO> boardList = new ArrayList<>();
    boardList.add(new BoardDTO(1, "수학강좌", "김수학", "수학을 배울 수 있음", 20));
    boardList.add(new BoardDTO(2, "과학강좌", "장영실", "과학을 배울 수 있음", 50));
    boardList.add(new BoardDTO(3, "국어강좌", "정철", "국어를 배울 수 있음", 30));
    boardList.add(new BoardDTO(4, "영어강좌", "김잉글", "영어를 배울 수 있음", 10));
    boardList.add(new BoardDTO(5, "미술강좌", "김아트", "미술을 배울 수 있음", 70));
    return boardList;
  }
}
