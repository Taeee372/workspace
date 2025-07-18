import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

const OrderInfo = () => {
  const [orderList, setOrderList] = useState([]);

  const [selectOrder, setSelectOrder]= useState({})

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios.get('/api/orders')
    .then((res) => {
      console.log(res.data);
      setOrderList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <>
      <OrderList 
      orderList={orderList} 
      setSelectOrder={setSelectOrder}
      setIsShow={setIsShow}
      />
      {
        isShow
        ? 
        <OrderDetail selectOrder={selectOrder}/>
        :
        null
      }
      
    </>
  )
}

export default OrderInfo