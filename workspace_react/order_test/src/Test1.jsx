import axios from 'axios'
import React from 'react'

const Test1 = () => {

  axios.get('/api/orders')
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <div>Test1</div>
  )
}

export default Test1