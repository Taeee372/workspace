package com.green.backend_shop.member.controller;

import com.green.backend_shop.member.dto.MemberDTO;
import com.green.backend_shop.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;

  //회원가입
  @PostMapping("")
  public void join(@RequestBody MemberDTO memberDTO){
    System.out.println(memberDTO);
    memberService.join(memberDTO);
  }

  //id 사용 가능 여부 판단
  @GetMapping("/checkId/{memId}")
  public boolean checkId(@PathVariable("memId") String memId){
    //사용 가능 : return true , 사용 불가능 : return false
    return memberService.isUsableId(memId);
  }
}
