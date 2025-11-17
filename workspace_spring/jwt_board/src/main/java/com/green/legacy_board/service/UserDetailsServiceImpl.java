package com.green.legacy_board.service;

import com.green.legacy_board.dto.CustomUserDetails;
import com.green.legacy_board.dto.MemberDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//AuthenticationManager가 로그인 검증을 시작하는 클래스
@Slf4j
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
  private final MemberService memberService;

  //LoginFilter 클래스의 attemptAuthentication 메서드 안에서
  //AuthenticationManager가 입력한 id, pw를 전달받으면
  //아래의 loadUserByUsername 메서드를 호출하여 검증 시작
  //매개변수 username은 입력한 id값을 가지고 있음
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    log.info("UserDetailServiceImpl -> loadUserByUsername() 메서드 실행");

    //로그인 검증을 위해 디비에 저장된 id, pw을 조회
    MemberDTO dto = memberService.getMemberInfoForLogin(username);

    //아예 아이디부터 잘못 입력하여 조회된 데이터가 없다면...
    if(dto == null){
      log.info("-----일치하는 아이디 없음-----");
      //강제 로그인 실패 예외 발생
      throw new UsernameNotFoundException("없는 아이디 : " + username);
    }

    //보안이 좋은, 계정 정보를 담을 수 있는 상자
    //이 상자에 디비에서 조회한 id, pw를 전달함
    //return문에 로그인하려는 id, pw 정보를 가진 CustomUserDetails 객체를 리턴하면
    //해당 정보를 AuthenticationManager 객체가 가져감
    return new CustomUserDetails(dto);
  }
}
