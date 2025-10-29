import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

//프로젝트 실행 로직
// 1. 로그인 여부 확인
// 2. 로그인이 되어 있지 않으면 -> 로그인 페이지로 이동
// 3. 한 번 로그인하면 다음부터는 로그인 불필요
// 4. 로그인이 되어 있다면 -> sns 목록 페이지로 이동

//(tabs), auth 두 폴더를 stack 구조로 정의하는 파일
const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown : false}}/>
  )
}

export default RootLayout

const styles = StyleSheet.create({})