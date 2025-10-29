import { Tabs } from 'expo-router'
import { StyleSheet, View } from 'react-native'

// (home), profile, settings 폴더를 tab 구조로 설정하는 파일
const TabLayout = () => {
  return (
      <Tabs screenOptions={{headerShown : false}}>
        <Tabs.Screen 
          //첫 번째 탭을 터치하면 (home)/index.jsx 파일이 실행
          name='(home)' 
          options={{
            title : 'Home'
          }}
        />
        <Tabs.Screen 
          //두 번째 탭을 터치하면 profile/index.jsx 파일이 실행
          name='profile'
          options={{
            title : 'Profile'
          }}
        />
        <Tabs.Screen 
          //세 번째 탭을 터치하면 settings/index.jsx 파일이 실행
          name='settings'
          options={{
            title : 'Settings'
          }}
        />
      </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})