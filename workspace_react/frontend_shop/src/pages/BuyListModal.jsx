import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import styles from './BuyListModal.module.css'

const BuyListModal = ({detailList, isOpen, onClose}) => {
  
  return (
    <Modal 
      isOpen={isOpen}
      size='600px'
      title='구매 상세 내역'
      onClose={onClose}
    >
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>No</td>
              <td>상품정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>총가격</td>
            </tr>
          </thead>
          <tbody>
            {
              detailList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{detailList.length - i}</td>
                    <td>
                      <div className={styles.img_div}>
                        <img src={`http://localhost:8080/upload/${e.bookDTO.imgList[0].attachedImgName}`} style={{width : '50px'}}/>
                        <span>{e.bookDTO.title}</span>
                      </div>
                    </td>
                    <td>{e.bookDTO.price}</td>
                    <td>{e.buyCnt}</td>
                    <td>{e.totalPrice}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Modal>
    
  )
}

export default BuyListModal