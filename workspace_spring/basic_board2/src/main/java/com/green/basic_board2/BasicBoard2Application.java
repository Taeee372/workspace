package com.green.basic_board2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BasicBoard2Application {

	public static void main(String[] args) {
		SpringApplication.run(BasicBoard2Application.class, args);
	}

}

// Controller : url로 요청을 받아 응답하는 클래스
// DTO : Spring과 데이터베이스 간 데이터 전송을 위해 사용하는 자료형
// mapper.xml : 실행할 쿼리를 작성
// Mapper interface : 쿼리를 실행할 추상메서드 작성
// Service : 프로젝트의 핵심기능(쿼리실행 메서드)을 구현하는 클래스
