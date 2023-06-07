import {ScaledSheet} from 'react-native-size-matters'

 const styles = ScaledSheet.create({
    heading:{
        fontWeight:"500",
        fontSize:14,
        lineHeight:20,
        color:"#000000",
        marginTop:24
      },
      error:{
        marginLeft:8,
        color:'red',
        fontSize:14
      },
      secondcontainer:{
        display:"flex",
        paddingHorizontal:5,
        marginBottom:8
      },
      select:{
        minWidth:171,
        height:44,
        
        // borderWidth:0.5,
        // borderRadius:10,

      }
})
 
 export default styles;