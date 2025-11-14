package com.green.legacy_board.jwt;

//Spring Security의 로그인 인증을 대체하기 위한 클래스
//원래 로그인 기능은 UsernamePasswordAuthenticationFilter 제공하지만 사용하지 않고 LoginFilter로 대체하겠다는 의미

import com.fasterxml.jackson.databind.ObjectMapper;
import com.green.legacy_board.dto.MemberDTO;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

//Username~~를 상속받아 사용
@Slf4j //로그 출력
public class LoginFilter extends UsernamePasswordAuthenticationFilter {
  //인증 처리를 담당하는 객체
  private final AuthenticationManager authenticationManager;

  //생성자 의존성 주입
  //로그인 요청 URL, 입력한 ID, PW가 전달되는 이름 변경
  public LoginFilter(AuthenticationManager authenticationManager){
    this.authenticationManager = authenticationManager;

    //로그인 요청 url 변경
    setFilterProcessesUrl("/member/login");

    //전달되는 로그인 데이터 변경
    setUsernameParameter("memEmail");
    setPasswordParameter("memPw");
  }

  //로그인 처리 시작
  //로그인 요청이 들어오면 아래 메서드가 자동으로 호출, 호출되면 로그인 로직을 시작함
  //로그인 요청은 기본적으로 '/login'으로 고정되어 있음
  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
    log.info("로그인 처리 시작 - attemptAuthentication() 메서드 실행");

    //입력받은 id, pw 가져오기
    MemberDTO vo = new MemberDTO();
    try {
      ObjectMapper objectMapper = new ObjectMapper();
      ServletInputStream inputStream = request.getInputStream();
      String messageBody = StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
      vo = objectMapper.readValue(messageBody, MemberDTO.class);
    }catch (IOException e){
      throw new RuntimeException(e);
    }
    log.info("입력받은 아이디 : " + vo.getMemEmail());
    log.info("입력받은 비밀번호 : " + vo.getMemPw());

    //우리가 입력한 아이디와 비밀번호를 데이터베이스에 저장한 정보와 일치하는지 검증하는 로직은
    //AuthenticationManager가 담당하기 때문에 전달받은 아이디와 비밀번호를 AuthenticationManager에 전달해줘야 한다.
    //이때 아이디와 비밀번호를 그냥 전달하는 것이 아니라 UsernamePasswordAuthenticationToken 객체에 실어 보낸다.
    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(vo.getMemEmail(), vo.getMemPw(), null);

    //아이디와 비번을 담고 있는 authToken객체를 authenticationManager에 전달, authenticationManager는 로그인을 검증하는 기능을 함
    //로그인을 검증하는 방법 -> UserDetailsService의 loadUserByUsername 메서드를 호출하여 검증
    //loadUserByUsername() 메서드의 실행 결과로 로그인 유저의 정보를 authentication 객체에 담아 옴
    Authentication authentication = authenticationManager.authenticate(authToken);
    log.info("DB에서 로그인 가능 여부 확인 완료(UserDetailsService의 loadUserByUsername 메서드 정상 실행 됨). 만약 검증에 실패했다면 본 출력문 실행 안 됨");
    log.info("로그인 중인 유저 : " + authentication.getName());

    //로그인 유저의 정보가 담긴 authentication객체를 리턴하면 authentication객체가 session에 저장됨
    //세션에 저장하는 이유는 security의 권한 처리를 위해서는 세션에 로그인 정보가 있어야 되기 때문.
    return authentication;
  }
}
