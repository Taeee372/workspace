package com.green.to_do;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
public class TodoController {
  private final TodoService todoService;

  @GetMapping("")
  public ResponseEntity<?> getList(){
    try {
      List<TodoDTO> todoList = todoService.getTodoList();
      return ResponseEntity.status(HttpStatus.OK).body(todoList);
    }catch (Exception e){
      e.printStackTrace();
      return ResponseEntity
              .status(HttpStatus.INTERNAL_SERVER_ERROR)
              .body("할 일 목록 조회 중 오류가 발생했습니다.");
    }
  }

  @PostMapping("")
  public ResponseEntity<?> add(@RequestBody TodoDTO dto){
    try {
      //MySQL은 NOT NULL에 빈 문자가 들어가는 걸 허용하기 때문에 빈 문자가 들어갔다고 오류로 넘기지 않는다
      //그렇지만 오라클에서는 NOT NULL에 빈 문자 들어가는 걸 허용하지 않기 때문에 try문에서 빈 문자 오류를 처리해줘야 됨
      //제목으로 빈 문자가 전달됐으면...
      if(dto.getTodoTitle().equals("")){
        //강제로 예외(오류)를 발생시킴
        throw new Exception();
      }

      todoService.addTodo(dto.getTodoTitle());
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      e.printStackTrace();

      boolean isParamError = dto.getTodoTitle() == null || dto.getTodoTitle().equals("");

      return ResponseEntity
              .status(    //1. 앱에서 입력한 할 일 제목이 이상할 경우   //2. 쿼리문 자체에 오류가 있을 경우
                isParamError ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR
              )
              .body(
                isParamError ?
                "입력한 제목 데이터가 정상적이지 않습니다." :
                "할 일 등록 기능 실행 중 오류가 발생했습니다."
              );
    }
  }

  @DeleteMapping("/{todoNum}")
  public ResponseEntity<?> delete(@PathVariable int todoNum){
    try {
      //todoNum이 0 이하의 값이면 유효하지 않은 값으로 판단
      if(todoNum <= 0){
        //강제로 예외(오류)를 발생시킴
        throw new Exception();
      }

      todoService.deleteTodo(todoNum);
      return ResponseEntity.status(HttpStatus.OK).build();
    }catch (Exception e){
      e.printStackTrace();

      boolean isParamError = todoNum <= 0;

      return ResponseEntity
              .status(    //1. 앱에서 전달한 할 일 번호가 이상할 경우   //2. 쿼리문 자체에 오류가 있을 경우
                isParamError ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR
              )
              .body(
                isParamError ?
                "입력한 할 일 번호가 정상적이지 않습니다." :
                "할 일 삭제 기능 실행 중 오류가 발생했습니다."
              );
    }
  }
}
