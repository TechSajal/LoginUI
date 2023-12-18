import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const asyncStorage = () => {
    const [data,setData] = useState()
  return (
    <View>
      <TextInput style={{borderWidth:1,borderColor:"black",margin:20}}  placeholder='Enter Infm. for Set data' />
    </View>
  )
}

export default asyncStorage