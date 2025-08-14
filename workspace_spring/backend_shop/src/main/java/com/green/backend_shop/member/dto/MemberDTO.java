package com.green.backend_shop.member.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class MemberDTO {
  private String memId;
  private String memName;
  private String memTel;
  private String memAddr;
  private String addrDetail;
  private String memEmail;
  private String memPw;
  private String memRole;
  private LocalDateTime joinDate;
}
