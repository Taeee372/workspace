import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  //전달되는 데이터 받기
  const params = useLocalSearchParams();
  //const {id, age} = useLocalSearchParams();

  return (
    <View>
      <Text>상세페이지</Text>
      <Text>{params.id}  /{params.age}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})

