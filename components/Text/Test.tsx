import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import {Icon} from 'react-native-eva-icons'
const Test = ({Input,Output,isEditAble}) => {
const EditIcon = () => (
        <Icon name='edit-outline' style={styles.icon} fill='black'/>
    )
  return (
    <View style={styles.container}>
        <View>
      <Text style={styles.font_bold}>{`${Input}:`}</Text>
        </View>
        <View style={styles.container_Icon}>
      <Text style={styles.font_content}>{Output}</Text>
      {isEditAble === true?
      <TouchableOpacity>
        <EditIcon/>
      </TouchableOpacity>
      :
      null
      }
      </View>
    </View>
  )
}

export default Test