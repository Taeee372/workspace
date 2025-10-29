import { Image, StyleSheet, Text, View } from 'react-native'
//이미지 파일 import
import face from '@/assets/images/face-01.jpg'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../../constants/colorConstant';

// FeedItem의 사용자 계정 정보 컴포넌트
const Profile = ({writer, createDate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={face} style={styles.img} />
        <View>
          <Text style={styles.writer}>{writer}</Text>
          <Text style={styles.createDate}>{createDate}</Text>
        </View>
      </View>
      <View>
        <FontAwesome6 name="ellipsis-vertical" size={18} color="black" />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  img : {
    width : 50,
    height : 50,
    borderWidth : 1,
    borderRadius : 50,
    borderColor : colors.GRAY_300
  },
  container : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    marginBottom : 10
  },
  profile : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10
  },
  writer : {
    fontSize : 14,
    fontWeight : 'bold'
  },
  createDate : {
    fontSize : 13,
    color : colors.GRAY_500
  }
})