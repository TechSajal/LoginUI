import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar,Text,Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
const Card = ({pic,name,companyname,date,time,isPending,nextScreen}) => {
  
  const navigation = useNavigation()
  return (
    <View style={styles.mainContainer} >
      <View style={styles.imageContainer}>
          <Avatar shape='round' style={styles.avatorStyle} source={pic} />
      </View>
      <View style={styles.contentContainer}>
          <Text  category='h6' numberOfLines={1} ellipsizeMode='tail' >{name}</Text>
          <View style={styles.contentSubContainer} >
            <View style={{maxWidth:"30%"}} >
          <Text style={styles.textSubContainer}  category='c2' numberOfLines={1} ellipsizeMode='tail' >{companyname}</Text>
            </View>
          <Text style={styles.textSubContainer} category='c2'>{date}</Text>
          <Text style={styles.textSubContainer} category='c2'>{time}</Text>
          </View>
          <View style={styles.buttonContainer}>
              <Button onPress={()=> navigation.navigate(nextScreen)} size='tiny' style={styles.buttongreen}>{isPending === true ? "Approve":"Edit"}</Button>
              <Button size='tiny' style={styles.buttongrey} >{isPending === true ? "Reject":"Cancel"}</Button>
          </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:96,
        backgroundColor:"#FFF",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#D6D6D6",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    imageContainer:{
      display:"flex",
      alignItems:"center",
      marginLeft:10,
    },
    avatorStyle:{
      width:74,
      height:74
    },
    contentContainer:{
      width:"100%",
      height:74,
      flex:1,
      marginRight:14
    },
    contentSubContainer:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    textSubContainer:{
       color:"#000",
       fontWeight:"500",
    },
    buttonContainer:{
        width:"100%",
        height:25,
         display:"flex",
         flexDirection:"row",
         gap:10,
         bottom:0,
         position:"absolute",
         justifyContent:"flex-end"
    },
    buttongreen:{
      borderRadius:5,
      backgroundColor:"#04A6A2", 
      borderColor:"transparent",
      paddingVertical:0,
    },
    buttongrey:{
      borderRadius:5,
      backgroundColor:"#D9D9D9",
      borderColor:"transparent",
      paddingVertical:0
    }
})

export default Card
