package com.green.to_do;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
  public List<TodoDTO> getTodoList();

  public void addTodo(String todoTitle);

  public void deleteTodo(int todoNum);

  public void updateTodo(TodoDTO todoDTO);
}
