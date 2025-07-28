package com.green.basic_board2.service;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.mapper.MemberMapper;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  public MemberService(MemberMapper memberMapper){
    this.memberMapper = memberMapper;
  }

  public int insertMemberInfo(MemberDTO memberDTO){
    int result = memberMapper.insertMemberInfo(memberDTO);
    return result;
  }
}
