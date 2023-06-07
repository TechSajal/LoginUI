import {ScaledSheet} from 'react-native-size-matters'
import {Dimensions} from 'react-native';

 const styles = ScaledSheet.create({
    container:{
       width:"100%",
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       marginBottom:16,
       gap:10

       
    },
    container_Icon:{  
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      flex:1,
      
    },
    icon:{
        marginHorizontal:5,
        width:22,
        height:22

      },
    font_bold:{
        fontWeight:"bold",
        color:"black",
        fontSize:20
    },
    font_content:{
        flex:1,
        display:"flex",
        flexWrap:"wrap",
       color:"black",
      fontSize:18,
    }
 })

 export default styles;