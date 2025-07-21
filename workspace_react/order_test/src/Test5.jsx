import axios from 'axios'
import React from 'react'

const Test5 = () => {

  axios.put('/api/orders/2', {
    itemName : '상품5',
    price : 3000
  })
  .then(res => console.log(res.data))
  .catch(error => console.log(error));

  return (
    <div>Test5</div>
  )
}

export default Test5