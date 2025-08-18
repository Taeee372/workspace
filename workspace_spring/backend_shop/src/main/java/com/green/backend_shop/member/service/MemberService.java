package com.green.backend_shop.member.service;

import com.green.backend_shop.member.dto.MemberDTO;
import com.green.backend_shop.member.mapper.MemberMapper;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  public MemberService(MemberMapper memberMapper){
    this.memberMapper = memberMapper;
  }

  //회원가입
  public void join(MemberDTO memberDTO){
    memberMapper.join(memberDTO);
  }

  //아이디 사용가능 여부 확인
  //사용가능 : return true
  public boolean isUsableId(String memId){
    //조회된 데이터가 없으면 null -> 사용 가능한 id
    String selectedId = memberMapper.checkMemId(memId);
    return selectedId == null; //selectedId가 null이라면 true 리턴
  }

}
