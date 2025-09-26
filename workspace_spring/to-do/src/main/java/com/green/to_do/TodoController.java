package com.green.to_do;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
public class TodoController {
  private final TodoService todoService;

  @GetMapping("")
  public List<TodoDTO> getList(){
    return todoService.getTodoList();
  }
}
