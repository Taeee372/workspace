package com.green.legacy_board.service;

import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;

  public void join(MemberDTO memberDTO){
    memberMapper.join(memberDTO);
  }

  public MemberDTO login(MemberDTO memberDTO){
    return memberMapper.login(memberDTO);
  }
}
