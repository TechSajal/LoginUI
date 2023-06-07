import {ScaledSheet} from 'react-native-size-matters'
import {Dimensions} from 'react-native';
 const styles = ScaledSheet.create({
    container:{
         width:"100%",
         height:"100%",
         display:"flex",
         flexDirection:"column"
    },
    image:{
      width:"100%",
      height:"60%",
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10
    },
    context_container:{
     width:"100%",   
     height:"40%",
     paddingHorizontal:16,
     paddingTop:16,
     display:"flex",
     flexDirection:"column",
     gap:16
    },
    headingcontainer:{
       display:"flex",
       flexDirection:"column",
       marginBottom:16,
    },
    heading:{
        color:"black",
        fontSize:26,
        fontWeight:"700"
    },
    subheading:{
        color:"#949494",
        fontSize:16
    },
    textinput:{
      display:"flex",
      flexDirection:'column',
    }
})

export default styles;