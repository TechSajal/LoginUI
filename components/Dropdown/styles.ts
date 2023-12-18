import {ScaledSheet} from 'react-native-size-matters'
import colors from '../../styles/colors';
 const styles = ScaledSheet.create({
    heading:{
        fontWeight:"500",
        fontSize:14,
        lineHeight:20,
        color:colors.CommonBlackColour,
        marginTop:24
      },
      error:{
        marginLeft:8,
        color:colors.ErrorText,
        fontSize:14
      },
      secondcontainer:{
        // width:"0%",
        display:"flex",
        paddingHorizontal:5,
        marginBottom:8,
      },
      select:{
        Width:220,
        height:44,
      }
})
 
 export default styles;