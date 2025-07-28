package com.green.basic_board2.mapper;

import com.green.basic_board2.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  public int insertMemberInfo(MemberDTO memberDTO);
}
