import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

//같은 폴더 내의 페이지 구조를 설정하는 파일
const HomeLayout = () => {
  return (
      <Stack 
        screenOptions={{headerShown : false}}
      />
  )
}

export default HomeLayout

const styles = StyleSheet.create({})