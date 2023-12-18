import {ScaledSheet} from 'react-native-size-matters'
import colors from '../../styles/colors';

 const styles = ScaledSheet.create({
    container:{
      width:"100%",
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       marginBottom:13, 
    },
    font_bold:{
        fontWeight:"500",
        color:colors.CommonBlackColour,
        fontSize:14,
        
    },
    font_content:{
        flex:1,
        display:"flex",
        flexWrap:"wrap",
       color:colors.CommonBlackColour,
      fontSize:18,
    }
 })

 export default styles;