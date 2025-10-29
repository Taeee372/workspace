import { FlatList, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/common/Button'
import { useFocusEffect, useRouter } from 'expo-router'
import Input from '../../../components/common/Input'
import { colors } from '../../../constants/colorConstant'
import FeedItem from '../../../components/home/FeedItem'
import { dummyData } from '../../../constants/dummy'
import * as SecureStore from 'expo-secure-store'


// 프로젝트 app 폴더 안의 index.jsx 파일을 최초로 실행
// 파일기반 routing

// 로그인
// 앱에서는 로그인 정보를 휴대폰 안의 secureStore 공간에 저장
// secureStore 사용을 위해 우선 라이브러리 설치 필요
// => npx expo install expo-secure-store

// 1. 프로젝트 실행 시 HomeScreen이 실행
// 2. HomeScreen이 실행되면 로그인 여부를 확인
// 3. 만약 로그인이 안됐다면 바로 로그인 페이지로 강제 이동
// *  secureStore에 저장된 데이터는 폰 초기화, 직접 로그아웃을 하지 않는 이상 영구적으로 저장 됨,
//    문자열 데이터만 저장 가능

// secureStore 사용 방법
// 라이브러리 import -> import * as SecureStore from 'expo-secure-store'
// 데이터 저장 -> await SecureStore.setItemAsync('key', 'value')
// 데이터 조회 -> await SecureStore.getItemAsync('key')
// 데이터 삭제 -> await SecureStore.deleteItemAsync('key')

// useFocusEffect 기본 문법
// 컴포넌트가 마운트되거나, 화면에 focus가 잡히면 실행
/*
 useFocusEffect(
    useCallback(() => {}, [])
  ) 
*/


// app/(tabs)/(home)/index.jsx
// sns 목록 페이지
const HomeScreen = () => {
  //마운트되거나, 화면에 focus가 잡히면 실행, 로그인 정보 여부 확인
  useFocusEffect(
    useCallback(() => {
      const getLoginInfo = async () => {
        //SecureStore에 저장된 로그인 정보를 가져옴
        const loginInfo = await SecureStore.getItemAsync('loginInfo')

        //가져온 데이터를 원래 형태인 객체로 변환
        const result = JSON.parse(loginInfo);

        console.log('로그인 데이터 = ', result);

        //로그인 안되어있다면
        if(result === null){
          router.replace('/auth/login')
        }
      }
      getLoginInfo();
    }, [])
  )

  const router = useRouter();

  //게시글 목록
  const feedList = dummyData;

  return (
    //화면 터치하면 키보드 내리기
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView 
        style={styles.container}
      >

        <Pressable onPress={() => router.push('/profile')}>
          <Text>제어 페이지로 이동</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/auth/login')}>
          <Text>로그인 페이지로 이동</Text>
        </Pressable>

        <FlatList 
          //반복할 데이터
          data={feedList}
          //데이터 하나하나 실행할 코드, 매개변수는 데이터 각각을 의미
          renderItem={({item}) => <FeedItem item={item} />}
          //반복 돌릴 아이템의 key값, 매개변수는 데이터 각각을 의미
          keyExtractor={(item) => item.id}
          //리스트 영역의 디자인
          contentContainerStyle={styles.listContainer}
        />

      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor : colors.WHITE,
    flex : 1 //높이값은 폰의 세로 크기에 맞춤
  },
  listContainer : {
    gap : 10,
    backgroundColor : colors.GRAY_200,
    paddingVertical : 8,
    paddingHorizontal : 6
  }
})