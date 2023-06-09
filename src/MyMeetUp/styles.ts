import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#FFFFFF",
        display:"flex",
        flex:1,
        gap:-15
    },
    backbutton:{
        position:"absolute",
        top:20,
        left:20
      },
    image:{
        width:"100%",
        height:"100%",
        display:"flex",
        flex:1
    },
    secondContainer:{
        borderTopEndRadius:16,
        borderTopStartRadius:16,
        width:"100%",
        height:"100%",
        flex:3,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column"
    },
    TextContainer:{
        marginTop:30,
        marginHorizontal:16,
        gap:8  
    },
    textheading:{
        fontWeight:"700",
        color:"#000000",
        fontSize:25,
        fontStyle:'normal'
    },
    textSubheading:{
     fontStyle:"normal",
     fontWeight:"400",
     fontSize:16,
     color:"#858585"
    },

    NoOfPeopleContainer:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       marginHorizontal:16
    },
    DateContainer:{
        display:"flex",
       flexDirection:"row",
       justifyContent:"space-between",
       marginHorizontal:16
    },
    RestaurantContainer:{
        marginHorizontal:16
    },
    DescribeMeetup:{
        marginHorizontal:16
    }
})

export default styles