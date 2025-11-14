package com.green.legacy_board.mapper;

import com.green.legacy_board.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  public void join(MemberDTO memberDTO);
  public MemberDTO getMemberInfoForLogin(String memberEmail);
}
