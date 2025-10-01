package com.green.to_do;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
  private final TodoMapper todoMapper;

  public List<TodoDTO> getTodoList(){
   return todoMapper.getTodoList();
  }

  public void addTodo(String todoTitle){
    todoMapper.addTodo(todoTitle);
  }

  public void deleteTodo(int todoNum){
    todoMapper.deleteTodo(todoNum);
  }
}
