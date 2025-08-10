package com.green.back_item.controller;

import com.green.back_item.dto.ItemDTO;
import com.green.back_item.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {
  private ItemService itemService;

  public ItemController(ItemService itemService){
    this.itemService = itemService;
  }

  //모든 상품 조회
  @GetMapping("")
  public List<ItemDTO> getItemList(){
    return itemService.getItemList();
  }

  //하나의 상품 조회
  @GetMapping("/{itemNum}")
  public ItemDTO getItem(@PathVariable("itemNum") int itemNum){
    return itemService.getItem(itemNum);
  }

  //상품 삭제
  @DeleteMapping("/{itemNum}")
  public int deleteItem(@PathVariable("itemNum") int itemNum){
    return itemService.deleteItem(itemNum);
  }

  //상품 등록
  @PostMapping("")
  public int regItem(@RequestBody ItemDTO itemDTO){
    return itemService.regItem(itemDTO);
  }

  //상품 수정
  @PutMapping("/{itemNum}")
  public int updateItem(@PathVariable("itemNum") int itemNum, @RequestBody ItemDTO itemDTO){
    itemDTO.setItemNum(itemNum);
    return itemService.updateItem(itemDTO);
  }
}
