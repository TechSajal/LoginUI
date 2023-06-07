import { View,TouchableOpacity, Alert, GestureResponderEvent } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-eva-icons'
import { Text,Button, IconElement, Layout, Spinner, TextProps } from '@ui-kitten/components';
import  styles from './styles'
import { ImageAssets } from '../../../assets/images/imageAssets';
import { RenderProp } from '@ui-kitten/components/devsupport';
const CommonButton = (props: {
title,onpress 
}) => {
    // const rightarrow = () => (
    //     <Icon name='arrow-forward-outline' style={styles.icon} fill='white'/>
    // )
  return (
    <View>
      <TouchableOpacity>
      <Button style={styles.button} onPress={()=>{
        props.onpress()
      }} size='medium' >{props.title}</Button>
      </TouchableOpacity>
    </View>
  )
}

export default CommonButton