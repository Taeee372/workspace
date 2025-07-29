package com.green.basic_board2.service;

import com.green.basic_board2.dto.MemberDTO;
import com.green.basic_board2.mapper.MemberMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  public MemberService(MemberMapper memberMapper){
    this.memberMapper = memberMapper;
  }

  public void insertMemberInfo(MemberDTO memberDTO){
    memberMapper.insertMemberInfo(memberDTO);
  }

  //잘 모르겠으면 걍 Mapper랑 맞추기
  //조회된 데이터가 리턴되는 것
  public String getMemberName(){
    return memberMapper.getMemberName();
  }

  public List<String> getMemberNameAll(){
    List<String> result = memberMapper.getMemberNameAll();
    return result;
  }

  public List<MemberDTO> getMemberAll(){
    return memberMapper.getMemberAll();
  }
}
