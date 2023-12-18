import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
 const style = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        padding:16,

    },
    chooseContainer:{
        width:"100%",
        height:32,
        display:"flex",
        flexDirection:"row",
        backgroundColor:colors.ChooseContainerColor,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"space-around",
    },
    chooseWhiteContainer:{
        display:"flex",
        width:"50%",
        backgroundColor:"white",
        borderRadius:7,
        height:"90%",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:5,
        marginRight:5
    },
    chooseTransparentContainer:{
        display:"flex",
        width:"50%",
        backgroundColor:"transparent",
        borderRadius:7,
        height:"90%",
        alignItems:"center",
        justifyContent:"center",
        // marginLeft:5,
        // marginRight:5
    },
    text:{
       fontWeight:"500",
       fontSize:12,
       textAlign:"center",
       color:colors.CommonBlackColour 
    },
    SecondContainer:{
        display:"flex",
        flex:1,
        marginTop:16,
    }
 })

 export default style