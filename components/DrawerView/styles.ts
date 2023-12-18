import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer:{
     width:"100%",
     height:"100%",
     flex:1,
     backgroundColor:"white",
     paddingHorizontal:16
  },
  secondContainer:{
     flex:0.2,
     borderBottomWidth:1.5,
     borderBottomColor:"#E4E4E4"
  },
  secondContainerContent:{
    position:"absolute",
    bottom:19
  },
  secondContainerContentMainText:{
    color:"#000000",
    fontSize:20,
    fontWeight:"600" 
  },
  secondContainerContentText:{
    color:"#000000",
    fontSize:14,
    fontWeight:"600" 
  },
  imageCross:{
     width:28,
     height:28,
     position:"absolute",
     right:8,
     top:16
  },
  thirdContainer:{
    flex:0.3,
    borderBottomWidth:1.5,
     borderBottomColor:"#E4E4E4"
  },
  logoProfile:{
    width:16,
    height:16
  },
  myProfileContainer:{
    width:"100%",
    flexDirection:"row",
    gap:10,
    paddingTop:20,
    paddingLeft:8,
    alignItems:"center"
  }
})

export default styles