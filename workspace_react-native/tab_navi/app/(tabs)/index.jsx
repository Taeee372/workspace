import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>홈 화면</Text>

      <Pressable onPress={() => router.push('/myPage')}>
        <Text>내 정보 페이지로 이동</Text>
      </Pressable>
    
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})