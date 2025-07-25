package com.green.basic_member.controller;

import com.green.basic_member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
  private MemberService memberService;

  @Autowired
  public MemberController(MemberService memberService){
    this.memberService = memberService;
  }

  //회원 등록
    @PostMapping("/members")
    public void lastInsertMember(){
      memberService.insertMember();
    }

  //회원 수정
    @PutMapping("/members")
    public void lastUpdateMember(){
      memberService.updateMember();
    }

  //회원 삭제
  @DeleteMapping("/members")
    public void lastDeleteMember(){
      memberService.deleteMember();
    }
}
