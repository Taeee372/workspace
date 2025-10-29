import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

// app/(tabs)/settings/_layout.jsx
// settings 폴더 안의 jsx 파일의 구조 설정
const SettingsLayout = () => {
  return (
    <Stack screenOptions={{headerShown : false}}/>
  )
}

export default SettingsLayout

const styles = StyleSheet.create({})