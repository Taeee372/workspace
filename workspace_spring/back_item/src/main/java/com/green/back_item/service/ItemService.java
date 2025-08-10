package com.green.back_item.service;

import com.green.back_item.dto.ItemDTO;
import com.green.back_item.mapper.ItemMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
  private ItemMapper itemMapper;

  public ItemService(ItemMapper itemMapper){
      this.itemMapper = itemMapper;
    }

  //모든 상품 정보 조회
  public List<ItemDTO> getItemList(){
    return itemMapper.getItemList();
  }

  //하나의 상품 조회
  public ItemDTO getItem(int itemNum){
    return itemMapper.getItem(itemNum);
  }

  //상품 삭제
  public int deleteItem(int itemNum){
    return itemMapper.deleteItem(itemNum);
  }

  //상품 등록
  public int regItem(ItemDTO itemDTO){
    return itemMapper.regItem(itemDTO);
  }

  //상품 수정
  public int updateItem(ItemDTO itemDTO){
    return itemMapper.updateItem(itemDTO);
  }
}
