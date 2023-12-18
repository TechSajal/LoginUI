import {ScaledSheet} from 'react-native-size-matters'
import colors from '../../styles/colors'
import { theme } from '../Helper/data'

 const styles = ScaledSheet.create({
    icon:{
      width:16,
      height:16
    },
    secondcontainer:{
        paddingHorizontal:5,
        marginBottom:8
    },
    heading:{
        fontWeight:"500",
        fontSize:14,
        lineHeight:20,
        color:colors.Heading,
        marginTop:24
      },
      error:{
        marginLeft:8,
        color:colors.ErrorText,
        fontSize:14
      },
      datepicker:{
          minWidth:171,
          height:44,
          color:"black"
      }
 })

 export default styles