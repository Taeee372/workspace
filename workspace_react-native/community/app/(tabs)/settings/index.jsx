import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/common/Button'
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

// app/settings/index.jsx
// settings 탭을 터치하면 실행되는 페이지
const SettingsHomeScreen = () => {
  const router = useRouter();

  const getData1 = () => {
    console.log(1);

    axios.get()
    .then(res => console.log(res.data))
    .catch();

    console.log(3)

    //react의 비동기 코드는 그림까지 다 그린 후 가장 마지막에 실행
    //위 코드의 실행 결과 출력 -> 1 3 2
  }
  
  //await, asyne 활용 문법
  //비동기 실행 코드 앞에 await 키워드를 붙이면 비동기 코드가 동기로 실행
  //함수 앞에 async 붙이면 해당 함수가 비동기로 강제 싱행
  //선언된 함수 안에 await가 붙은 코드가 있으면 해당 향수는 앞에 async를 붙여서 비동기 함수로 만들어 줘야 함
  const getData2 = async () => {
    console.log(1);
    
    try{
      const res = await axios.get();
      console.log(res.data);
    }catch(e){
      console.log(e)
    }
    
    console.log(3);
  }
  
  const getData3 = async () => {
    console.log(1);
    const res = await axios.get();
    console.log(res.data);
    console.log(3);
  }

  //함수 실행 결과 출력 -> 11 33 1 res.data 3
  //getData3 함수 자체는 비동기지만 그 안의 코드들은 동기
  //test5 코드는 진행 : 11 (getData3()은 비동기 함수니까 마지막에 실행) 33 getData3()
  //getData3() 안의 코드는 동기로 진행되니까 1 res.data 3
  //11 > 33 > getData3() => 11 > 33 > 1 > res.data > 3
  const test5 = () => {
    console.log(11);
    getData3();
    console.log(33);
  }

  const logout = async () => {
    //SecureStore에 저장된 로그인 정보를 삭제
    await SecureStore.deleteItemAsync('loginInfo');

    //첫 페이지로 이동
    if(router.canDismiss()){ //쌓은 스택이 존재하면...
      router.dismissAll(); 
    }
    router.push('/');
  }

  return (
   <TouchableWithoutFeedback>
    <SafeAreaView>
      <Button title='로그아웃' onPress={() => logout()} />
    </SafeAreaView>
   </TouchableWithoutFeedback>
  )
}

export default SettingsHomeScreen

const styles = StyleSheet.create({})