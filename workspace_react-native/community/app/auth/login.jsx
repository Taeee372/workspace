import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
//secureStore import
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const router = useRouter();

  //로그인 함수
  const login = async () => {
    //원래는 axios 통신
    //로그인 한 회원의 아이디, 이름, 권한 정보를 조회했다고 가정
    const loginInfo = {
      userId : 'java',
      userName : 'kim',
      userRole : 'ADMIN'
    }

    //로그인 정보를 secureStore에 저장
    await SecureStore.setItemAsync('loginInfo', JSON.stringify(loginInfo));

    //로그인 성공 후 기존에 존재하던 모든 화면 stack을 제거하고 SNS 목록 페이지로 이동
    if(router.canDismiss()){   //쌓은 스택이 존재하면...
      router.dismissAll(); //모든 stack 제거
    }
    router.replace('/')
  }

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView>
      
        <Input label='아이디' />
        <Input label='비밀번호' isPw={true} />
        <Button title='로그인' onPress={() => login()} />
      
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})