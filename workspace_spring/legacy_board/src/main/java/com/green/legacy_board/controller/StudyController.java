package com.green.legacy_board.controller;

import com.green.legacy_board.dto.BoardDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/study")
public class StudyController {

  //매개변수에 Model 인터페이스 객체를 선언하면 html로 이동 시 필요 데이터를 가져갈 수 있음
  @GetMapping("/printData")
  public String getBoardList(Model model){
    BoardDTO boardDTO = new BoardDTO();
    boardDTO.setBoardNum(1);
    boardDTO.setTitle("제목");
    boardDTO.setWriter("작성자");

    BoardDTO boardDTO1 = new BoardDTO();
    boardDTO1.setBoardNum(2);
    boardDTO1.setTitle("제목2");
    boardDTO1.setWriter("작성자2");

    BoardDTO boardDTO2 = new BoardDTO();
    boardDTO2.setBoardNum(3);
    boardDTO2.setTitle("제목3");
    boardDTO2.setWriter("작성자3");

    List<BoardDTO> list = new ArrayList<>();
    list.add(boardDTO);
    list.add(boardDTO1);
    list.add(boardDTO2);

    //model 객체에 데이터 적재하기
    model.addAttribute("name", "kim");
    model.addAttribute("age", 20);
    model.addAttribute("boardInfo", boardDTO);
    model.addAttribute("boardList", list);

    //보여질 html 파일명을 리턴
    return "study_1";
  }

}
