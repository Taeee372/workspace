import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

//index.jsx -> 최초 실행 파일
const HomeScreen = () => {
  //페이지 이동 시 사용할 변수
  //router.push('/detail') : 새로운 화면을 스택에 추가하여 이동
  //router.replace('/detail') : 현재 화면을 새 화면으로 교체
  //router.navigate('/detail') 
  // : 해당 경로가 있으면 이동만 하고 스택에 추가하지 않음(replace) 
  //   해당 경로가 없다면 스택에 추가하여 이동(push)
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
      <Text>홈화면</Text>

      <View style={styles.btn_view}>
        <Pressable 
          style={styles.btn_press}
          onPress={() => {router.push({
            pathname : '/detail',
            params : {
              id : 'abc',
              age : 20
            }
          })}}
        >
        <Text>상세 페이지로 이동</Text>
      </Pressable>

      <Pressable 
        style={styles.btn_press}
        onPress={() => {router.replace('/myPage')}}
      >
        <Text>마이페이지로 이동</Text>
      </Pressable>
      </View>
     
      </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  btn_view : {
    flexDirection : 'row',
    justifyContent : 'space-around'
  }, 
  btn_press : {
    borderWidth : 1,
    width : '40%',
    alignItems : 'center',
    padding : 10
    
  }
})