package com.green.legacy_board.service;

import com.green.legacy_board.dto.MemberDTO;
import com.green.legacy_board.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
  private final MemberMapper memberMapper;
  private final PasswordEncoder passwordEncoder;

  public void join(MemberDTO memberDTO){
    //암호화
    String encodedPw = passwordEncoder.encode(memberDTO.getMemPw());
    memberDTO.setMemPw(encodedPw);

    memberMapper.join(memberDTO);
  }

  public MemberDTO getMemberInfoForLogin(String memberEmail){
    return memberMapper.getMemberInfoForLogin(memberEmail);
  }

}









