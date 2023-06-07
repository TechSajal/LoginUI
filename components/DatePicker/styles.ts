import {ScaledSheet} from 'react-native-size-matters'

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
        color:"#454C52",
        marginTop:24
      },
      error:{
        marginLeft:8,
        color:'red',
        fontSize:14
      },
      datepicker:{
          minWidth:171,
          height:44
      }
 })

 export default styles