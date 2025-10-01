import { Image, StyleSheet, Text, View } from 'react-native'

//이미지 import
//import 다음에 오는 문자는 변수명 같은 거(맘대로 변경 가능)
//@ -> 최상위 경로에서부터 찾아가겠다. (리액트 네이티브에서만 가능...)
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'
import { Pressable } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from '@/constants/appConst'

const Task = ({data, changeReloading}) => {

  //삭제 버튼 터치 함수
  const deleteTodo = () => {
  
    axios.delete(`${SERVER_URL}/todo/${data.todoNum}`)
    .then(res => {
      changeReloading();
    })
    .catch(e => {
      if(e.status === 400 || e.status === 500){
        alert(`오류코드 : ${e.status} \n 오류 메세지 : ${e.response.data}`)
      }
      else{
        alert('알 수 없는 오류가 발생했습니다')
        console.log(e)
      }
    });
  }

  return (
    <View style={styles.task_back}>
      <Text style={styles.todo}>{data.todoTitle}</Text>
       <Image 
        source={edit_img}
        style={styles.img}
        />

      {/* 터치 기능 구현 시 Pressable 컴포넌트 사용 */}
      <Pressable 
        onPress={() => deleteTodo()}
        style={styles.press_img}  
      >
        <Image 
          source={del_img}
          style={styles.img}
        />
      </Pressable>
      
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  task_back : {
    backgroundColor : '#eeeeee',
    padding : 14,
    flexDirection : 'row',
    gap : 3
  },
  todo : {
    fontSize : 18,
    width : '80%'
  },
  press_img : {
    width : '10%'
  },
  img : {
    
  }
})