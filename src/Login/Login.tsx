import { View,Image,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert, Button} from 'react-native'
import { Text } from '@ui-kitten/components'
import React, { useState,useRef, useEffect } from 'react'
import  styles  from './styles'
import { ImageAssets } from '../../assets/images/imageAssets'
import Phoneno from '../../components/PhoneNo/Phoneno'
import LoginButton from '../../components/button/Loginbutton/LoginButton'
const Login = ({ navigation }) => {
  const [error,seterror] = useState("")
  const [auth,setauth] = useState(false)
  const [phoneno,setphoneno] = useState("")
  const phoneinput = useRef(null)
  const [formattedValue, setFormattedValue] = useState("");
  const getPhoneNumber = () => {
   // Alert.alert(formattedValue)
    if(formattedValue.length === 0){
      seterror("*plz enter phone number")
    }else if(formattedValue.length < 8 ){
       seterror("*number should not be less than 8")
    }else if(formattedValue.length>14){
       seterror("*number should not be  greater than 14")
    }else{
      seterror("")
      // setauth(true)
      navigation.navigate("userDetails")
    }
  
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
      <Image style={styles.image} source={ImageAssets.LoginImage} />
      <View style={styles.context_container}>
         <View style={styles.headingcontainer}>
         <Text  style={styles.heading}>Login to continue</Text>
         <Text category='p2' style={styles.subheading} >Welcome to Embassy Office Parks</Text>
         </View>
          <View style={styles.textinput}>
          <Phoneno errors={error} phoneInput={phoneinput} value={phoneno} setValue={setphoneno} setFormattedValue={setFormattedValue} />
        <LoginButton /*error={auth}*/ navigation={navigation.navigate} onpresserror={getPhoneNumber} NavigateToScreen={"userDetails"}   />
        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login;