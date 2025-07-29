package com.green.basic_board2.controller;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.service.MemberService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.SimpleTimeZone;

@RestController
public class MemberController {
  private MemberService memberService;

  public MemberController(MemberService memberService){
    this.memberService = memberService;
  }

  @PostMapping("/members")
  public void insertMemberInfo(@RequestBody MemberDTO memberDTO){
    System.out.println(memberDTO);
    memberService.insertMemberInfo(memberDTO);
    //insert는 웬만하면 하나씩 등록되기 때문에 굳이 int로 받을 필요 없다
    //등록이 안 될 경우는 오류.. 0개가 등록될 일은 없다
    //return값을 활용할 일이 거의 없기 때문에 (1만 나오니까) void로 둬도 됨
  }

  @GetMapping("/test1")
  public String getMemberName(){
    return memberService.getMemberName();
  }

  @GetMapping("/test2")
  public List<String> getMemberNameAll(){
    return memberService.getMemberNameAll();
  }

  @GetMapping("/members")
  public List<MemberDTO> getMemberAll(){
    return memberService.getMemberAll();
  }
}
