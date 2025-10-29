import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '@/constants/colorConstant'

const Button = ({title='버튼', size='large', onPress, ...props}) => {
  return (
    <Pressable
      //Pressable 컴포넌트는 터치 유무에 따른 디자인 적용 가능
      //매개변수 {pressed}는 해당 Pressable 컴포넌트가 터치됐을 때 true를 반환
      style={({pressed}) => [
        styles.btnContainer, 
        styles[size], 
        pressed && styles.pressed
      ]}
      onPress={() => onPress()}
      {...props}
    >
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  btnContainer : {
    backgroundColor : colors.ORANGE_700,
    borderRadius : 8,
    justifyContent : 'center',
    alignItems : 'center'
  },
  large : {
    width : '100%',
    height : 34
  },
  normal : {
    width : '70%',
    height : 30
  },
  pressed : {
    opacity : 0.8
  }
})