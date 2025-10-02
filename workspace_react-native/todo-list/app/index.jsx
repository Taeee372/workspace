import axios from 'axios'
import { useEffect, useState } from 'react'
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Task from '../components/Task'
import { SERVER_URL } from '@/constants/appConst'

const HomeScreen = () => {
  //조회한 할 일 목록 데이터를 저장할 state 변수
  const [todoList, setTodoList] = useState([]);

  //입력한 제목 데이터를 저장할 state 변수
  const [todoTitle, setTodoTitle] = useState('');

  //목록 조회 재실행을 위한 의존성 배열 데이터
  const [reloading, setReloading] = useState(0)

  //마운트되면 목록 조회
  useEffect(() => {
    //localhost를 쓰면 내 컴퓨터라는 것을 나타내는데
    //웹에서는 내 컴퓨터라고 바로 인식할 수 있지만, 앱에서는 인식할 수 없기 때문에 정확한 ip주소를 적어줘야 한다.
    //ex) 내 집 주소 모르는 친구한테
    //    우리집에 와 -> 모르는데 어케 감???
    //    전하동 봉수로 몇 동 몇호로 와 -> ㅇㅋㅇㅋ
    axios.get(`${SERVER_URL}/todo`)
    .then(res => {
      console.log(res.data);
      setTodoList(res.data);
    })
    .catch(e => console.log(e));
  }, [reloading]);

  //할 일 등록 기능
  const addTodo = () => {
    axios.post(`${SERVER_URL}/todo`, {todoTitle : todoTitle}) //걍 todoTitle 초기값을 객체로 줘도 됨
    .then(res => {
      alert('등록 성공');
      //입력한 글자 초기화, 목록 재조회
      setTodoTitle('');
      setReloading(reloading + 1);
    })
    .catch(e => {
      //e.status : 오류 상태코드 => ex) 400
      const errorCode = e.status; 

      if(errorCode === 400 || errorCode === 500){
        alert(`오류 코드 : ${errorCode} \n 오류 메세지 : ${e.response.data}`)
      }
      else{
        console.log(e) //개발자가 예상하지 못한 오류라면 전체 에러 띄우기
      }

      //console.log(errorCode);
      //e.response.data : 오류 발생 시 가져오는 데이터 => ex) 입력한 제목 데이터가 정상적이지 않습니다.
      //console.log(e.response.data);
    });
  }

  //reloading 값 변경 함수(화면 다시 그려지게 하기)
  const changeReloading = () => {
    setReloading(reloading + 1);
  }
  

  return (
    //딱히 기능(소리, 진동...)은 없지만 터치는 가능한 컴포넌트, 빈 화면 터치 시 키보드 숨김 기능을 구현할 때 사용
    //onPress props에 키보드 숨김 기능을 구현
    //얘는 딱 이렇게 정해져 있음 Touch~dismiss까지 복붙해서 써도 ㄱㅊ
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      {/* 화면 꽉차게 하기 위해 container 컴포넌트에 플렉스 1 주기 */}
      <SafeAreaView style={styles.container}> 
        
        <View>
          <Text style={styles.title}>To Do List</Text>
        </View>

        <View style={styles.input_view}>
          <TextInput 
            style={styles.input}
            placeholder=' + Add a Task'
            onChangeText={text => setTodoTitle(text)}
            //onSubmitEditing : 폰 키보드에서 확인, ok, confirm 등의 키 터치 시 발생
            onSubmitEditing={() => addTodo()}
            value={todoTitle}
            //onBlur : 인풋 태그가 focus를 잃었을 때 실행
            onBlur={() => setTodoTitle('')}
          />
        </View>
        
        <View style={styles.list_view}>
        <FlatList   //리액트 네이티브는 map함수 대신 FlatList 사용
          //전체 데이터
          data={todoList}

          //데이터로 그림 그리기, 매개변수 : 데이터 하나하나, item은 구조분해할당으로 받아줘야됨
          renderItem={({item}) => 
            <Task 
              data={item} 
              changeReloading = {changeReloading} //함수도 전달 가능
            />}

          //매개변수 : 배열 안 데이터 하나하나(map함수에서 i와 같은 역할)
          //{(item) => {return item.todoNum}} 이 최종적으로 줄여진 코드
          keyExtractor={item => item.todoNum} 
        />
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,   //최상위 태그의 높이를 폰 화면에 꽉 차게 변경
    padding : 20
    // paddingHorizontal : 좌우 패딩
    // paddingVertical : 상하 패딩
  },
  input : {
    borderWidth : 1,
    borderColor : '#cccccc',
    borderStyle : 'solid'
  },
  title : {
    fontSize : 36,
    fontWeight : 'bold'
  },
  input_view : {
    marginVertical : 20
  },
  list_view : {
    backgroundColor : '#cccccc',
    padding : 7,
    gap : 7
  }
})