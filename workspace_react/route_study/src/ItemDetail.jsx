import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  //url에서 넘어오는 데이터를 받기 위해 useParams() 훅을 사용
  //useParams는 URL Parameter 방식만 받아올 수 있고, Query String 방식으로 쓴 건 받아올 수 없다
  const {itemNum, title} = useParams(); //구조분해할당으로 받아온 것
  console.log(itemNum);
  
  // const data = useParams();
  // console.log(data);
  // console.log(data.itemNum);

  return (
    <div>상품 상세 정보 페이지</div>
  )
}

export default ItemDetail