import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({label='', isPw=false ,...props}) => {
  //input 태그의 focus 여부를 저장하는 변수
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        style={[styles.input, isFocus && styles.focused]}
        //onFocus : focus 상태일 때 실행 함수
        onFocus={() => setIsFocus(true)}
        //onBlur : focus를 잃을 때 실행 함수
        onBlur={() => setIsFocus(false)}
        //비밀번호 여부
        secureTextEntry={isPw}
        {...props}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  input : {
    borderColor : 'gray',
    borderWidth : 1,
    height : 42,
    borderRadius : 8,
    paddingHorizontal : 10
  },
  label : {
    marginBottom : 6,
    fontSize : 16,
    color : 'gray'  
  },
  focused : {
    borderColor : 'black'
  }
})