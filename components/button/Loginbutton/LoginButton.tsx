import { View,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import {Icon} from 'react-native-eva-icons'
import { Text,Button, IconElement, Layout, Spinner } from '@ui-kitten/components';
import  styles from './styles'
import { ImageAssets } from '../../../assets/images/imageAssets';
const LoginButton = ({onpresserror}) => {
    const rightarrow = () => (
        <Icon name='arrow-forward-outline' style={styles.icon} fill='white'/>
    )
  return (
    <View>
      <Button  onPress={()=>{
        onpresserror(); 
      }}

       accessoryRight={rightarrow}
        size='medium' 
        style={styles.button}>Login</Button>
    </View>
  )
}

export default LoginButton