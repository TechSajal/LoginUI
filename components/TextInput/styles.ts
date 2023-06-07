import {ScaledSheet} from 'react-native-size-matters'
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
     color:"#454C52",
     marginTop:24
   },
   contectheading:{
      fontWeight:"500",
      fontSize:13,
      color:"#FF8C00",
      marginTop:24,
      textDecorationLine:"underline",
      textDecorationColor:"#FF8C00"
   },
   border:{
        height:44,
        minWidth:171,
        borderWidth:1,
        borderRadius:12,
        borderColor:"#BEBAB3",
        fontSize:16,
        color:"#24292E",
        fontWeight:"400",
        paddingLeft:16,
        // marginBottom:24
    },
    errorSize14:{
      marginLeft:8,
      color:'red',
      fontSize:14
    },
    
    errorSize12:{
      marginLeft:8,
      color:'red',
      fontSize:12
    }
})

export default styles