import {ScaledSheet} from 'react-native-size-matters'

 const styles = ScaledSheet.create({
    container: {
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        flexDirection:"column",
        paddingTop:20,
        paddingHorizontal:16,
      },
      select:{
        minWidth:171,
        height:44
      },
      container_dateanddrop:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
        
      },
      radio_container:{
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:32
      },
      textFrequentVisit:{
        fontWeight:"500",
        fontSize:14,
        color:"#000000"
      }
})

export default styles;