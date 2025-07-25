package com.green.basic_member.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
  //회원 등록
   public void insertMember();

  //회원 정보 수정
  public void updateMember();

  //회원 삭제
  public void deleteMember();
}
