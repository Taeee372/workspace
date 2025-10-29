import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// app/(tabs)/profile/_layout.jsx
// profile 폴더 안의 jsx 파일의 구조 설정
const ProfileLayout = () => {
  return (
    <Stack screenOptions={{headerShown : false}}/>
  )
}

export default ProfileLayout

const styles = StyleSheet.create({})