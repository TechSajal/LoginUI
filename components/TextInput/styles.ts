import {ScaledSheet} from 'react-native-size-matters'
import colors from '../../styles/colors'
const styles = ScaledSheet.create({
   maincontainer:{
    //  backgroundColor:"white"
   },
   secondcontainer:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-between",
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
   contectheading:{
      fontWeight:"500",
      fontSize:13,
      color:colors.contectHeading,
      marginTop:24,
      textDecorationLine:"underline",
      textDecorationColor:colors.contectHeading
   },
   border:{
        height:44,
        minWidth:171,
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.borderColour,
        fontSize:16,
        color:colors.textColour,
        fontWeight:"400",
        paddingLeft:16,
        // marginBottom:24
    },
    errorSize14:{
      marginLeft:8,
      color:colors.ErrorText,
      fontSize:14
    },
    
    errorSize12:{
      marginLeft:8,
      color:colors.ErrorText,
      fontSize:12
    }
})

export default styles