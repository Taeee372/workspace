import axios from 'axios'
import React from 'react'

const Test3 = () => {
  const data = {
    'itemName' : '상품1',
    "price" : 5000,
    cnt : 3
  };

  //객체부분 그대로 data에 넣어도 됨
  axios.post('/api/orders', data)
  .then(res => console.log(res.data))
  .catch(error => console.log(error));

  return (
    <div>Test3</div>
  )
}

export default Test3