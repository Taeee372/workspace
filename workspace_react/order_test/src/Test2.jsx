import axios from 'axios'
import React from 'react'

const Test2 = () => {

  axios.get('/api/orders/3')
  .then(res => console.log(res.data))
  .catch(error => console.log(error));

  return (
    <div>Test2</div>
  )
}

export default Test2