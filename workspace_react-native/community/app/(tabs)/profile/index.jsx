import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/common/Button'
import axios from 'axios'

// app/progile/index.jsx
// profile 탭을 터치하면 실행되는 페이지
const ProfileHomeScreen = () => {

  //버튼1 클릭 시 실행 함수
  const test1 = () => {
    axios.get('http://192.168.30.111:5000/t1')
    .then(res => {
      console.log(res.data);
    })
    .catch(e => console.log(e));
  }

  //버튼2 클릭 시 실행 함수
  //UrlParameter로 데이터 가져가기
  //ex) @GetMapping("/item/{num}")
  const test2 = () => {
    axios.get('http://192.168.30.111:5000/t2/5')
    .then(res => console.log('통신 성공'))
    .catch(e => console.log(e));
  }

  //버튼3 클릭 시 실행 함수
  //post 방식으로 데이터 가져가기
  const test3 = () => {
    axios.post('http://192.168.30.111:5000/t3', {
      stuName : 'kim',
      stuAge : 20
    })
    .then()
    .catch(e => console.log(e));
  }

  //버튼3 클릭 시 실행 함수
  //query string 방식의 데이터 받기
  const test4 = () => {
    axios.get('http://192.168.30.111:5000/t4', {params : {stuName : 'kim', stuAge : 20}})
    .then()
    .catch(e => console.log(e));
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
       <SafeAreaView style={styles.btnContainer}>

       <Button title='버튼1' onPress={() => test1()}/> 

       <Button title='버튼2' onPress={() => test2()}/> 

       <Button title='버튼3' onPress={() => test3()}/> 

       <Button title='버튼4' onPress={() => test4()}/> 

      </SafeAreaView>
    </TouchableWithoutFeedback>
   
  )
}

export default ProfileHomeScreen

const styles = StyleSheet.create({
  btnContainer :{
    width : '50%',
    gap : 10,
    marginHorizontal : 'auto'
  }
})