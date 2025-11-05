package com.green.legacy_board.controller;

import com.green.legacy_board.dto.BoardDTO;
import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.mapper.BoardMapper;
import com.green.legacy_board.service.BoardService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
  private final BoardService boardService;

  //매개변수에 Model 인터페이스 객체를 선언하면 html로 이동 시 필요 데이터를 가져갈 수 있음
  @GetMapping("")
  public String getBoardList(Model model){
    //게시글 목록 조회
    List<BoardDTO> boardList = boardService.getBoardList();

    //목록 데이터를 html로 가져가기
    model.addAttribute("boardList", boardList);

    //보여질 html 파일명(페이지명)을 리턴
    return "board-list";
  }

  @GetMapping("/detail")
  public String getBoardDetail(){
    //보여질 html 파일명(페이지명)을 리턴
    return "board-detail";
  }

  //글쓰기 페이지
  @GetMapping("/reg")
  public String goRegBoard(){
    return "reg-board";
  }

  //게시글 등록
  @PostMapping("/reg")
  public String regBoard(@ModelAttribute BoardDTO boardDTO, HttpSession session){
    //세션에 저장된 데이터 가져오기
    //세션에 저장된 데이터는 Object 타입이기 때문에 형변환 후 사용
    Object loginData = session.getAttribute("loginInfo");
    MemberDTO loginInfo = (MemberDTO)loginData;

    //로그인 정보에서 id를 추출하고, 추출한 id는 boardDTO의 작성자로 저장
    boardDTO.setWriter(loginInfo.getId());

    //게시글 등록 쿼리 실행
    boardService.regBoard(boardDTO);

    //게시글 목록 페이지로 이동
    return "redirect:/board";
  }

  //게시글 상세 페이지
  @GetMapping("/detail/{boardNum}")
  public String detail(@PathVariable("boardNum") int boardNum, Model model){
    System.out.println("전달받은 글 번호 : " + boardNum);

    //게시글 상세 조회
    BoardDTO board = boardService.getBoardDetail(boardNum);
    model.addAttribute("boardInfo", board);

    //게시글 상세 페이지(board-detail.html)
    return "board-detail";
  }
}
