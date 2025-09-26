package com.green.backend_shop.test;

import com.green.backend_shop.member.dto.MemberDTO;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//컨트롤러에서 return 되는 데이터는 리액트가 받는다.
//리액트에 결과를 전달할 때는 데이터만 전달하는 게 아니라 여러 정보를 함께 보내주는 것이 좋다.
//리액트에 데이터 뿐 아니라 추가적인 데이터도 함께 보내기 위해 제공되는 객체가 ResponseEntity 라는 객체다.

@RestController
@RequestMapping("/test")
public class TestController {

  @GetMapping("/t1")
  public ResponseEntity<String> test1(){
    return ResponseEntity
            .status(HttpStatus.OK)
            .body("java");
  }

  @GetMapping("/t2")
  public ResponseEntity<MemberDTO> test2(){
    MemberDTO dto = new MemberDTO();
    dto.setMemId("java");
    dto.setMemPw("1234");

    return ResponseEntity
            .status(HttpStatus.CREATED) //등록 성공 상태(insert 됐을 때(post) 보통 얘 씀)
            .body(dto);
  }

  @GetMapping("/t3")
  public ResponseEntity<Integer> test3(){
    //헤더 영역에 데이터를 싣기 위해 헤더 객체 생성
    HttpHeaders headers = new HttpHeaders();

    //생성한 header 객체에 데이터 적재
    headers.add("myName", "hong");
    headers.add("myAge", "20");

    //적재시킨 걸 넣으려면 .header()가 아니라 .headers()를 써야함 -> 실무에서는 headers()를 더 많이 씀
    //객체 안 만들고 .header() 쓰려면 .header("myName", "hong") 이렇게 바로 넣어주면 됨

    return ResponseEntity
            .status(HttpStatus.OK)
            .headers(headers)
            .body(100);
  }

  //리액트로 전달한 데이터가 없다면?
  @GetMapping("/t4")
  public ResponseEntity<?> test4(){ //여기서 ? : 와일드카드, 자료형을 자바가 알아서 판단하게 함
    //리액트로 가져갈 데이터가 없다면 status만 적용하고, 마지막에 .build() 메서드를 사용
    return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .build();
  }


}
