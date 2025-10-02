import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'

//이미지 import
//import 다음에 오는 문자는 변수명 같은 거(맘대로 변경 가능)
//@ -> 최상위 경로에서부터 찾아가겠다. (리액트 네이티브에서만 가능...)
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'
import { SERVER_URL } from '@/constants/appConst'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pressable } from 'react-native'

/* 
  앱에서 alert 또는 confirm을 사용하는 방법
  Alert.alert('제목', '내용', '버튼 정보');

  ex) 
  Alert.alert(
    'Confirm',
    '정말 삭제할까요?',
    [
      {
        text : '확인',       // 버튼에 나올 문구
        style : 'default',   // 버튼 디자인
        onPress : () => {}   // 버튼 누르면 뭐 할래?
      }, 
      {}                     //객체 하나하나 : 버튼 하나하나  
    ]
  )
*/

//props로 넘어오는 데이터를 state 변수의 초기값으로 바로 세팅하는 것은 지양!
const Task = ({data, changeReloading}) => {
  //수정 상태를 저장할 state 변수
  const [isUpdating, setIsUpdating] = useState(false);

  //수정 내용을 저장할 state 변수
  const [updateTitle, setUpdateTitle] = useState(''); 

  //updateTitle 변수의 값을 props로 받아온 데이터로 세팅하기 위해 사용
  //선언할 때는 빈 값을 주고, useEffect(마운트 할 때) 안에서 초기값 세팅 하는 게 좋음
  useEffect(() => {
    setUpdateTitle(data.todoTitle)
  }, [data.todoTitle]);

  //삭제 버튼 터치 함수
  const deleteTodo = () => {
    Alert.alert(
      '확인', 
      '정말 삭제할까요?',
      [
        {
          text : '삭제',
          style : 'default',
          onPress : () => confirmDelete()
        },
        {
          text : '취소',
          style : 'cancel'
          //아무일도 일어나지 않게 하려면 그냥 onPress 안 넣으면 됨
        }
      ]
    );
  }

  //삭제 함수
  const confirmDelete = () => {
    axios.delete(`${SERVER_URL}/todo/${data.todoNum}`)
    .then(res => changeReloading()) //화면 다시 그리기
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

  //할 일 수정 함수
  const updateTodo = () => {
    axios.put(`${SERVER_URL}/todo/${data.todoNum}`, {todoTitle : updateTitle})
    .then(res => changeReloading()) //화면 다시 그리기
    .catch(e => console.log(e));
  }

  return (
    <View style={styles.task_back}>
      {
        isUpdating
        ?
        <TextInput 
          style={styles.input}
          value={updateTitle} //value와 onChange는 같은 데이터를 바라봐야 정상작동되기 때문에 data.todoTitle이 아니라 updateTitle 넣기
          onBlur={() => setIsUpdating(false)}
          autoFocus={true} //input 태그에 자동 포커스
          onChangeText={text => setUpdateTitle(text)}
          onSubmitEditing={() => updateTodo()}
        />
        :
        <Text style={styles.todo}>{data.todoTitle}</Text>
      }
      
      <Pressable onPress={() => setIsUpdating(true)}>
        <Image 
          source={edit_img}
          style={styles.img}
        />
      </Pressable>

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
    
  },
  input : {
    width : '80%',
    borderWidth : 1,
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor : 'white'
  }
})