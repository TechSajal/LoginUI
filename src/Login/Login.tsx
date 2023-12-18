import { View,Image,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform, Alert, Button, TouchableOpacity} from 'react-native'
import { Text } from '@ui-kitten/components'
import React, { useState,useRef, useEffect } from 'react'
import  styles  from './styles'
import { ImageAssets } from '../../assets/images/imageAssets'
import Phoneno from '../../components/PhoneNo/Phoneno'
import LoginButton from '../../components/button/Loginbutton/LoginButton'
import Card from '../../components/Card/Card'
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
      <View style={{paddingHorizontal:16,paddingTop:10,backgroundColor:"white",height:"100%",display:"flex",flexDirection:"column",gap:10}}>
        <Card nextScreen="AccessApi" pic={ImageAssets.HaldiramLogo} name=" Anshul Dhyani Kattar Hindu" companyname="UBZ group " date="30 September 2023" time="24:00 pm" isPending={true}/>
        <Card nextScreen="FoodSearch" pic={ImageAssets.LoginImage} name="Priyal Sharma" companyname="Accenture" date="2 June 2023" time="05:00 pm" isPending={false}/>
        <Card nextScreen="MyMeetup" pic={ImageAssets.UserImage} name="Asif Ali Khan" companyname="Super Share" date="3 August 2023" time="15:00 pm" isPending={false} />
      </View>
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <View>
    //   <Image style={styles.image} source={ImageAssets.LoginImage} />
    //   <View style={styles.context_container}>
    //      <View style={styles.headingcontainer}>
    //      <TouchableOpacity  onPress={()=> navigation.openDrawer() }>
    //      <Text  style={styles.heading}>Login to continue</Text>
    //      </TouchableOpacity>
    //      <Text category='p2' style={styles.subheading} >Welcome to Embassy Office Parks</Text>
    //      </View>
    //       <View style={styles.textinput}>
    //       <Phoneno errors={error} phoneInput={phoneinput} value={phoneno} setValue={setphoneno} setFormattedValue={setFormattedValue} />
    //     <LoginButton /*error={auth}*/ navigation={navigation.navigate} onpresserror={getPhoneNumber} NavigateToScreen={"userDetails"}   />
    //     </View>
    //   </View>
    //   </View>
    // </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}

export default Login;