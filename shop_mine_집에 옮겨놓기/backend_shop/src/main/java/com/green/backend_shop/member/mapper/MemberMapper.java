package com.green.backend_shop.member.mapper;

import com.green.backend_shop.member.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {

  //회원가입
  public void join(MemberDTO memberDTO);

  //아이디 중복확인
  public String checkMemId(String memId);
}
