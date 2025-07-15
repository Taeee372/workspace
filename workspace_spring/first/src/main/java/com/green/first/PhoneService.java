package com.green.first;


import org.springframework.beans.factory.annotation.Autowired;

public class PhoneService {
  private Phone p;

  //클래스 안에 생성자가 하나라면 Autowired 어노테이션이 자동으로 붙는다
  @Autowired
  public PhoneService(Phone phone){
    p = phone;
  }
}
