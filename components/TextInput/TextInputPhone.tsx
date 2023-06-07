import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import styles from './styles'
import { TextInput as TextInputRN} from 'react-native'
const TextInput = ({ispassword,title,infm,setinfm}) => {
    return (
    <View>
       {
        ispassword === false ?
        <TextInputRN 
           value={infm}
           onChangeText={setinfm}
           style={styles.border}
           placeholder= {title}
           autoCapitalize='none'
           autoCorrect={false}
           secureTextEntry={false}
           keyboardType='numeric'
         /> 
        
         :
         <TextInputRN 
           value={infm}
           onChangeText={setinfm}
           style={styles.border}
           placeholder= {title}
           autoCapitalize='none'
           autoCorrect={false}
           secureTextEntry={true}
           keyboardType='numeric'
         />
       }
    </View>
  )
}

export default TextInput