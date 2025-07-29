package com.green.basic_board2.mapper;

import com.green.basic_board2.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
  public void insertMemberInfo(MemberDTO memberDTO);

  //채워줄 빈값이 없으니 매개변수 없음 (xml 쿼리에 #{} 존재하지 않음)
  //조회결과를 가져올 수 있는 자료형을 리턴타입으로 둔다
  //이 경우에는 MEM_NAME 하나를 조회하기 때문에 리턴타입 String
  public String getMemberName();

  //resultType, resultMap : 조회된 데이터 중 >>하나의 행<< 데이터를 가져올 수 있는 자료형
  //리턴타입 :  조회된 모든 데이터를 가져올 수 있는 자료형을 쓴다
  //so 여기서는 여러 행이 조회되기 때문에 List 인데 그 중에서도 MEM_NAME 여러개이기 때문에 List<String>
  //쿼리 작업과 연결할 땐 배열 안 씀!
  public List<String> getMemberNameAll();

  public int getMemberAge();

  public MemberDTO getMember();

  public List<MemberDTO> getMemberAll();

  public List<MemberDTO> getMemberAll2(int memAge); //항상 디비에 데이터가 많을 때를 가정
}
