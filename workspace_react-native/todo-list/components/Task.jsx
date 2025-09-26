import { Image, StyleSheet, Text, View } from 'react-native'

//이미지 import
//import 다음에 오는 문자는 변수명 같은 거(맘대로 변경 가능)
//@ -> 최상위 경로에서부터 찾아가겠다. (리액트 네이티브에서만 가능...)
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'

const Task = ({data}) => {
  return (
    <View style={styles.task_back}>
      <Text style={styles.todo}>{data.todoTitle}</Text>
      <Image 
        source={edit_img}
        style={styles.img}
      />
      <Image 
        source={del_img}
        style={styles.img}
      />
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
  img : {
    width : '9%',
    height : 30
  }
})