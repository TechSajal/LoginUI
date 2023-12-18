import { View,TouchableOpacity} from 'react-native'
import React from 'react'
import {Button} from '@ui-kitten/components';
import  styles from './styles'
const CommonButton = (props: {
title,onpress,size,width,height ,color,marginTop
}) => {
  return (
    <View>
      <TouchableOpacity >
      <Button onPress={()=>{ props.onpress()}} style={[styles.button,{width:props.width,height:props.height,backgroundColor:props.color,marginTop:props.marginTop}]}  size={props.size} >{props.title}</Button>
      </TouchableOpacity>
    </View>
  )
}

export default CommonButton