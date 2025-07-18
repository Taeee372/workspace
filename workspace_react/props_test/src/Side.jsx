import React from 'react'

//const {name, age, addr} = props;
const Side = ({name, age, addr}) => {
  // const name = props.name;
  // const age = props.age;
  // const addr = props.addr;

  return (
    <div>Side, {name}</div>
  )

}

  //---- 구조분해할당 예시 ----//

  // const arr1 = [1, 5]
  // const f1 = (arr) => {
  //   return arr[0] + arr[1]
  // }
  // f1(arr1);

  //onst arr1 = [1, 5] //구조분해할당 
  //const f1 = ([a, b]) => {
  //  return a, b
  //}
  //f1(arr1);

  //const phone = {
   // modelName : 's10', 
   // price : 1000,
   // color : 'white'
  //}

  //const {modelName, price, color} = phone;
  //const f2 = ({modelName, price, color}) => {
   // console.log(`모델명 = ${modelName}`)
  //}
    



export default Side