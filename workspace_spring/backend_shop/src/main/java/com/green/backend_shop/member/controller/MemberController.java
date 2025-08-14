package com.green.backend_shop.member.controller;

import com.green.backend_shop.member.dto.MemberDTO;
import com.green.backend_shop.member.service.MemberService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
  private MemberService memberService;

  public MemberController(MemberService memberService){
    this.memberService = memberService;
  }

  //회원가입
  @PostMapping("/members")
  public void insertMember(@RequestBody MemberDTO memberDTO){
    memberService.insertMember(memberDTO);
  }
}
