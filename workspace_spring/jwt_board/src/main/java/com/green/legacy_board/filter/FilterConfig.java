package com.green.legacy_board.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// @Configuration : 객체 생성 + 이 클래스는 설정 내용이 들어있다는 것을 인지
// @Bean : 메서드의 정의문에 사용하며, 리턴되는 데이터를 객체로 만들어줌
@Configuration
public class FilterConfig {

//  @Bean
//  public FilterRegistrationBean<Filter1> myFilterRegistration(){
//    FilterRegistrationBean<Filter1> registrationBean = new FilterRegistrationBean<>();
//
//    registrationBean.setFilter(new Filter1());
//    registrationBean.addUrlPatterns("/*");
//    registrationBean.setOrder(0);  //order 숫자가 낮을 수록 먼저 실행되는 검문소
//
//    return registrationBean;
//  }
//
//  @Bean
//  public FilterRegistrationBean<Filter2> myFilterRegistration1(){
//    FilterRegistrationBean<Filter2> registrationBean = new FilterRegistrationBean<>();
//
//    registrationBean.setFilter(new Filter2());
//    registrationBean.addUrlPatterns("/member/*");
//    registrationBean.setOrder(1);
//
//    return registrationBean;
//  }
}
