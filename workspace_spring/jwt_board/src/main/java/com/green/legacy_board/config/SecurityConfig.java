package com.green.legacy_board.config;

import com.green.legacy_board.jwt.JwtConfirmFilter;
import com.green.legacy_board.jwt.JwtUtil;
import com.green.legacy_board.jwt.LoginFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

//SpringSecurity의 인증과 인가에 대한 설정 파일
@Configuration
@EnableWebSecurity
//해당 어노테이션이 있으면 컨트롤러에서 인가에 대한 어노테이션 사용 가능
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {
  private final JwtUtil jwtUtil;

  //이 메서드가 인증과 인가에 대한 설정을 세팅하는 메서드
  //메서드의 리턴타입, 매개변수는 정해져 있음
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig) throws Exception{
    //인증을 담당하는 객체 생성
    AuthenticationManager authenticationManager = authConfig.getAuthenticationManager();

    http
      //아래의 cors 설정을 위한 객체의 내용을 적용시키겠다
      .cors(Customizer.withDefaults())
      //csrf 공격에 대한 보안 사용을 해제(어차피 토큰 기반에서는 안 털림)
      .csrf(csrf -> csrf.disable())
      //폼 태그 기반 로그인 방식 사용 안 함
      .formLogin(form -> form.disable())
      //예전의 로그인 방식 사용 안 됨
      .httpBasic(basic -> basic.disable())
      //세션 방식 사용 안 함
      .sessionManagement(
        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      )
      //인증 및 인가에 대한 설정
      .authorizeHttpRequests(
        //anyRequest : 어떤 요청에도 permitAll : 접근 허가
        auth -> auth.anyRequest().permitAll()
      );

    //로그인 처리 필터인 UsernamePasswordAuthenticationFilter 자리를 우리가 만든 로그인 처리 필터인 LoginFilter로 교체
    http.addFilterAt(new LoginFilter(authenticationManager, jwtUtil), UsernamePasswordAuthenticationFilter.class);
    http.addFilterBefore(new JwtConfirmFilter(jwtUtil), LoginFilter.class);

    //인증 및 인가에 대한 모든 정보를 가진 http 객체를 리턴
    return http.build();

  }

  //CORS 설정 Bean
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true); //쿠키 정보를 통신하기 위한 설정
    config.addAllowedOrigin("http://localhost:5173"); //리액트에서의 요청 허용
    config.addAllowedHeader("*"); //모든 헤더 정보 허용
    config.addAllowedMethod("*"); //get, post, delete, put 등의 요청 메서드 허용

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
  }

  //비밀번호 암호화 기능을 제공하는 객체
  @Bean
  public PasswordEncoder bCryptPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

}
