package com.green.back_item.mapper;

import com.green.back_item.dto.ItemDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {
  //전체 상품 조회
  public List<ItemDTO> getItemList();

  //하나의 상품 조회
  public ItemDTO getItem(int itemNum);

  //상품 삭제
  public int deleteItem(int itemNum);

  //상품 등록
  public int regItem(ItemDTO itemDTO);

  //상품 수정
  public int updateItem(ItemDTO itemDTO);
}
