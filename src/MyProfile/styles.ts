import {ScaledSheet} from 'react-native-size-matters'
import {Dimensions} from 'react-native';
 const styles = ScaledSheet.create({
    container:{
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        flexDirection:"column",
        alignItems:"center",
        paddingHorizontal:16,
        gap:32
    },
    image_container:{
       marginTop:10,
       width:150,
       height:150,
       borderRadius:360,
       overflow:"hidden"
    },
    content_container:{
        width:"100%",
        height:"auto"
    }

 })

 export default styles;