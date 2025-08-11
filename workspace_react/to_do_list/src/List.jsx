import React from 'react'
import edit from './edit.png'
import deleteImg from './deleteImg.png'
import styles from './List.module.css'
import UpdateList from './UpdateList'

const List = ({data, setData}) => {

  console.log(data)
  return (
    <div className={styles.container}>
      <div>
       <table>
         <tbody>
            {
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.txt}</td>
                    <td><img src={edit} onClick={e => console.log(i)}/></td>
                    <td><img src={deleteImg} onClick={e => {}}/></td>
                  </tr>
                )
              })
            }
         </tbody>
       </table>
      </div>
    </div>
  )
}

export default List