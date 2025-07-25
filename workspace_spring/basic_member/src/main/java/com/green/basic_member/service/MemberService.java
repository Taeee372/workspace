package com.green.basic_member.service;

import com.green.basic_member.mapper.MemberMapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Service
public class MemberService {
  private MemberMapper memberMapper;

  @Autowired
  public MemberService(MemberMapper memberMapper){
    this.memberMapper = memberMapper;
  }

  //회원 등록
    public void insertMember(){
      memberMapper.insertMember();
    }

  //회원 수정
    public void updateMember(){
      memberMapper.updateMember();
    }

  //회원 삭제
    public void deleteMember(){
      memberMapper.deleteMember();
    }
}
