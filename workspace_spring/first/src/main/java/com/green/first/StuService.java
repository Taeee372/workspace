package com.green.first;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StuService {
  private Member member;

  //생성자 의존성 주입
  @Autowired //자동으로 객체를 연결하겠습니다
  public StuService(Member m){
    this.member = m;
  }
}


//스프링 프로젝트는 실행하면 모든 클래스를 살펴보면서
//클래스 위에 객체생성 어노테이션이 있는지 확인
//어노테이션이 있으면 객체 생성
//Member member = new Member();