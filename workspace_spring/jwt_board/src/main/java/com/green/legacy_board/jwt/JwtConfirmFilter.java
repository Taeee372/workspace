package com.green.legacy_board.jwt;

import com.green.legacy_board.dto.CustomUserDetails;
import com.green.legacy_board.dto.MemberDTO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

//토큰 검증 필터
@Slf4j
@RequiredArgsConstructor
public class JwtConfirmFilter extends OncePerRequestFilter {
  private final JwtUtil jwtUtil;

  //각 요청마다 무조건 실행하는 필터
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    log.info("토큰 검증 메서드 실행");

    //토큰 검증 실행(클라이언트에 토큰은 헤더 영역에 담겨 있음)
    String authorization = request.getHeader("Authorization");

    //토큰이 없거나, 토큰이 Bearer 로 시작하지 않으면...
    if(authorization == null || !authorization.startsWith("Bearer ")){
      log.info("토큰이 없습니다");

      //토큰 검증 후 다음 필터 동작을 진행
      filterChain.doFilter(request, response);
      return ;
    }

    //Bearer 뺀 진짜 토큰만 추출
    String token = authorization.split(" ")[1];

    //토큰이 있지만 만료가 됐으면...
    if(jwtUtil.isExpired(token)){
      log.info("만료된 토큰입니다");

      //토큰 검증 후 다음 필터 동작을 진행
      filterChain.doFilter(request, response);
      return ;
    }

    log.info("토큰 검증 성공");

    //토큰에서 정보 추출
    String memEmail = jwtUtil.getUsername(token);
    String memRole = jwtUtil.getRole(token);

    //userEntity를 생성하여 값 set
    MemberDTO member = new MemberDTO();
    member.setMemEmail(memEmail);
    member.setMemRole(memRole);

    //UserDetails에 회원 정보 객체 담기
    CustomUserDetails customUserDetails = new CustomUserDetails(member);

    //스프링 시큐리티 인증 토큰 생성
    Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());

    //세션에 사용자 저장 . 일시적으로 세션에 사용자 정보를 저장하는 이유는 유저의 권한 체크 때문이다.
    SecurityContextHolder.getContext().setAuthentication(authToken);

    //토큰 검증 후 다음 필터 동작을 진행
    filterChain.doFilter(request, response);
  }
}
