import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

//app/(tabs)/_layout.jsx
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown : false,
        tabBarInactiveTintColor : 'gray',
        tabBarActiveTintColor : 'tomato'
      }}
    >
      <Tabs.Screen 
        name='index'      //해당 탭에 연결될 jsx 파일명
        options={{        //탭 디자인
          title : 'Home',  //탭에 보여지는 글자
          tabBarIcon : () => <FontAwesome name="home" size={24} color="black" /> //개별로 준 속성이 더 우선순위
        }}
      />
      <Tabs.Screen 
        name='myPage'
        options={{
          title : '내 정보',
          tabBarIcon : () => <FontAwesome name="user" size={24} color="black" />
        }}
      />
      <Tabs.Screen 
        name='settings'
        options={{
          title : '설정',
          tabBarIcon : () => <Ionicons name="settings-sharp" size={24} color="black" />
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})