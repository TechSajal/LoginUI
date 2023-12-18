import {ScaledSheet} from 'react-native-size-matters'
import colors from '../../../styles/colors'
const styles = ScaledSheet.create({
  button:{
     backgroundColor:colors.CommonButton,
     borderColor:"transparent",
     borderRadius:10,
     marginTop:20
  },
  icon:{
    width:22,
    height:22
  },
  buttontext:{
    fontSize:20,
  }
})

export default styles