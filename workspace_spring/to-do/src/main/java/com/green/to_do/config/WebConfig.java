package com.green.to_do.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//CORS 설정 클래스 파일
// - REACT, REACT NATIVE에서 스프링 서버로 접근을 허용하는 설정
// - CORS 설정은 기본적으로 SPRING 프로젝트(백엔드)에서 작업을 한다.
// - CORS는 웹끼리의 통신, 앱은 해당 안 됨

//Configuration 어노테이션 : 객체 생성 + 해당 클래스가 설정 파일임을 인지
//WebMvcConfigurer 인터페이스 안에 addCorsMappings 메서드 존재
//addCorsMappings 메서드 안에서 cors 설정 코드 추가
@Configuration
public class WebConfig implements WebMvcConfigurer {

  // ("/*") -> ("/admin") 가능 but ("/admin/aaa") 불가능
  // ("/**") -> ("/admin/aaa") 얘도 가능, /뒤에 뭐가 오든 다 가능 ("/aaa/bbb/ccc...")다 가능
  // 매개변수로 (String... a) 이렇게 들어오면 a는 배열로 취급
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")    //접근 허용할 SPRING의 API URL
            .allowedOrigins(
                    "http://localhost:5173", //react
                    "http://localhost:8081"  //react-native web 실행
            )  //접근을 허용할 origin 서버 (여기에 * 쓰면 모든 곳에서 접근 가능하기 때문에 위험)
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*") //요청 시 허용할 헤더 정보
            .allowCredentials(false); //토큰 로그인 방식 사용 시에는 true 설정
  }
}