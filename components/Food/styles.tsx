import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles  = StyleSheet.create({
    container:{
       backgroundColor:colors.FoodBackgroundColour,
       borderRadius:8,
       width:"45%",
       marginLeft:14,
       height:212,
      //  shadowOpacity:0.1,
       shadowRadius:2,
       elevation:6,
       marginVertical:10,
       
    },
    Image_Container:{
      width:"100%",
      height:"70%",
      backgroundColor:colors.FoodImageBackground,
      borderTopEndRadius:8,
      borderTopStartRadius:8

    },
    image:{
      alignSelf:"flex-end",
      justifyContent:"center",
      width:"80%",
      height:"80%",
      right:15,
      top:25
    },
    imageLogo:{
      width:"20%",
      height:"20%",
     position:"absolute",
     top:5,
     left:5
    },
    heading_container:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:10,
      marginLeft:8,
      marginRight:15
    },
    addButton:{
       width:20,
       height:20
    }


})

export default styles;