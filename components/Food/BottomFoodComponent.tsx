import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import stylesbottom from './stylesbottom'
import { dataBottom } from '../Helper/data'
const BottomFoodComponent = ({filterID}) => {
    const [click,setclick] = useState(1)
    const [array,setArray] = useState(dataBottom)
    useEffect(()=>{
      const updateddata =  dataBottom.map((item)=>{
            if(item.id === click){
                   return {...item,color:"orange"}
            }else{
            return {...item,color:"rgba(244, 244, 244, 1)"}
            }
            
         })
         filterID(click)
         setArray(updateddata)
    },[click]) 
  
  const renderitem = ({item}) =>{
      return (
           <TouchableOpacity style={{backgroundColor:`${item.color}`,marginHorizontal:10}} onPress={() => onpress(item.id) } >
          <View style={[stylesbottom.container]}>
            <View style={stylesbottom.white_circle} >
           <Image resizeMode='contain' source={item.logo} style={{width:"70%",height:"70%"}} />
            </View>
        </View>
           </TouchableOpacity>
    )
  }
  const onpress = (getitem) => {
    setclick(getitem)
 }
  return(
    
    <View style={{width:"100%",height:80,position:"absolute",bottom:0,backgroundColor:"rgba(244, 244, 244, 1)"}} >
       <FlatList
         data={array}
         renderItem={renderitem}
         keyExtractor={(item) => item.id.toString()}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
       />
    </View>
  )
}

export default BottomFoodComponent