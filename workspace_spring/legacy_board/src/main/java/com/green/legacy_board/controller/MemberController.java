package com.green.legacy_board.controller;

import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.service.MemberService;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.Session;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Enumeration;

@Controller
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;

  //회원가입 페이지로 이동
  @GetMapping("/join")
  public String goJoin(){
    return "join";
  }

  //회원가입 실행
  //form 태그 안의 input 태그 데이터를 가져오기 위해 @ModelAttribute 어노테이션을 사용
  @PostMapping("/join")
  public String join(@ModelAttribute MemberDTO memberDTO){
    System.out.println(memberDTO);

    //회원가입 후 게시글 목록 페이지로 이동
    memberService.join(memberDTO);

    //회원가입 후 바로 board-list.html 파일로 이동하면 게시글 목록 조회 안 됨
    // -> 게시글 목록 조회 기능을 수행하는 controller의 메서드를 실행
    // return 안의 내용은 기본적으로 html 파일명으로 인식
    // -> redirect: 키워드를 붙이면 html 파일명으로 해석하지 않음
    return "redirect:/board";
  }

  //로그인 페이지로 이동
  @GetMapping("/login")
  public String goLogin(){
    return "login";
  }

  //session 객체는 controller 메서드의 매개변수에 선언
  @PostMapping("/login")
  public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session){

    //로그인 하기 전 session 데이터 조회
    Enumeration<String> names =  session.getAttributeNames();
    System.out.println("=== 로그인 전 세션에 저장된 데이터 ===");
    while (names.hasMoreElements()){
      String name = names.nextElement();
      Object value = session.getAttribute(name);
      System.out.println("key : " + name + " / value : " + value);
    }

    //로그인 처리
    MemberDTO result = memberService.login(memberDTO);

    System.out.println(result == null ? "불가능" : "가능");

    //실제 로그인(로그인 가능한 회원이면 로그인 정보를 세션에 저장)
    if(result != null){
      //("부를 이름", 넣을 데이터)
      session.setAttribute("loginInfo", result);
      //session.setMaxInactiveInterval(1 * 60 * 30); 사용자가 아무런 반응이 없을 때 30분 후 세션 만료(은행앱 제한시간 그런 거)
    }

    //로그인 후 세션 데이터 조회
    Enumeration<String> keys =  session.getAttributeNames();
    System.out.println("=== 로그인 후 세션에 저장된 데이터 ===");
    while (keys.hasMoreElements()){
      String name = keys.nextElement();
      Object value = session.getAttribute(name);
      System.out.println("key : " + name + " / value : " + value);
    }

    //게시글 목록 페이지
    return "redirect:/board";
  }

  //로그아웃
  @GetMapping("/logout")
  public String logout(HttpSession session){
    session.removeAttribute("loginInfo");
    return "redirect:/board";
  }

}
