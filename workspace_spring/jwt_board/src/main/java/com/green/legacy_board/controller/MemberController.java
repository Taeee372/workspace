package com.green.legacy_board.controller;

import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Enumeration;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
  private final MemberService memberService;

  //회원가입 실행
  //form 태그 안의 input 태그 데이터를 @ModelAttribute 어노테이션을 사용
  @PostMapping("")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
    System.out.println(memberDTO);

    //회원가입
    memberService.join(memberDTO);

    return ResponseEntity.status(HttpStatus.CREATED).build();
  }
}




