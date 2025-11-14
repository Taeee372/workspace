package com.green.legacy_board.filter;

import jakarta.servlet.*;

import java.io.IOException;

//클래스가 필터가 되기 위해선 Filter 인터페이스를 구현해야 함
public class Filter2 implements Filter {

  //검문소에서 실행할 내용
  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
    //검문 내용
    System.out.println("Filter1 검문소 실행~");

    //검문 끝났으면 다음 단계 실행
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
