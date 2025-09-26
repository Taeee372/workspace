import axios from 'axios'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Task from '../components/Task'

const HomeScreen = () => {
  //조회한 할 일 목록 데이터를 저장할 state 변수
  const [todoList, setTodoList] = useState([]);

  //마운트되면 목록 조회
  useEffect(() => {
    axios.get('http://localhost:8080/todo')
    .then(res => {
      console.log(res.data);
      setTodoList(res.data);
    })
    .catch(e => console.log(e));
  }, []);
  

  return (
    //화면 꽉차게 하기 위해 container 컴포넌트에 플렉스 1 주기
    <SafeAreaView style={styles.container}>
      
      <View>
        <Text style={styles.title}>To Do List</Text>
      </View>

      <View style={styles.input_view}>
        <TextInput 
          style={styles.input}
          placeholder='+ Add a Task'
        />
      </View>
      
      <View style={styles.list_view}>
      <FlatList 
        //전체 데이터
        data={todoList}

        //데이터로 그림 그리기, 매개변수 : 데이터 하나하나, item은 구조분해할당으로 받아줘야됨
        renderItem={({item}) => <Task data={item} />}

        //매개변수 : 배열 안 데이터 하나하나(map함수에서 i와 같은 역할)
        //{(item) => {return item.todoNum}} 이 최종적으로 줄여진 코드
        keyExtractor={item => item.todoNum} 
          

      />
      </View>

    </SafeAreaView>
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