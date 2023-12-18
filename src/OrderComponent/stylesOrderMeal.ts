import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
 container:{
    display:"flex",
    flex:1,
 },
 FirstContainer:{
     flex:0.3
 },
 TextHeading:{
    fontSize:25,
    fontWeight:"700",
    textAlign:"left",
    color:"black",
    marginBottom:8
 },
 TextSubHeading:{
    fontWeight:"400",
    fontSize:16,
    color:"#858585",
    textAlign:"left"
 },
 TextSubDetails:{
    fontWeight:"500",
    fontSize:13,
    color:"#464646",
    marginTop:34
 },
 SecondContainer:{
   flex:0.3,
   borderColor:colors.CommonBlackColour,
   borderTopWidth:0.5,
   borderBottomWidth:0.5
 },

})

export default styles