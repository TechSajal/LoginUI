import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ImageAssets } from '../../assets/images/imageAssets'
const Foodcheckout = ({route}) => {
    const {id,logo,image,text,price,type} = route.params
    const [no,Setno] = useState(1)
    return (
    <View style={styles.container} >
      <View style={styles.containerImage} >
        <Image style={styles.Image} resizeMode='contain' source={image} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{marginLeft:20}} >
          <Text style={styles.text}>{type}</Text>
          <View style={{display:"flex",flexDirection:"row",marginTop:5}} >
            <Text style={styles.textLight} >{text}</Text>
            <View style={styles.noContainer} >
            <TouchableOpacity onPress={()=> Setno(no+1)}>
                <Image source={ImageAssets.Add} style={{width:20,height:20}} />
            </TouchableOpacity>
            <Text style={styles.text}>{no>0?no:0}</Text>
            <TouchableOpacity onPress={()=> Setno(no-1)} >
                <Image source={ImageAssets.Minus} style={{width:20,height:20}}  />
            </TouchableOpacity>
           <Text style={styles.text} >Rs {no>0?price*no:0}</Text>
            </View>
          </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
    },
    containerImage:{
        flex:0.4,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    Image:{
      display:"flex",
      flex:0.85,
      marginLeft:10 
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    },
    textLight:{
        fontSize:16,
        fontWeight:"bold",
        color:"black",
        textAlign:"center"
    },
    noContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        right:0,
        position:"absolute",
        marginRight:20,
        gap:15
    }
})
export default Foodcheckout