import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Test from '../../components/Text/Test'
import CommonButton from '../../components/button/Loginbutton/CommonButton'
import { ImageAssets } from '../../assets/images/imageAssets'
const MyProfile = () => {
  return (
    <View style={styles.container} >
      <View style={styles.image_container}>
         <Image source={ImageAssets.UserImage} style={{width:150,height:150}}  />
      </View>
      <View style={styles.content_container} >
                 <Test  Input="Name" Output="Sajal Kaushal" isEditAble={false} />
                 <Test Input="Email" Output="sajalkaushal3@gmail.com" isEditAble={false} />
                 <Test Input="Phone" Output="9958969106" isEditAble={false} />
                 <Test Input="BloodGroup" Output="B+" isEditAble={true} />
                 <Text style={{ color:"black",fontWeight:"bold",fontSize:20,marginBottom:20}}>Emergency Contact Details</Text>
                <Test  Input="Name" Output="Sajal Kaushal" isEditAble={true}/>
                 <Test  Input="Phone" Output="9958969106" isEditAble={true} />
                <Test Input="Company Name" Output="Primathon Technology Ventures Pvt. Ltd." isEditAble={false}  />
                 <Test  Input="Company Address" Output="5th Floor,108,Sector 44,Gurugram,Haryana 122003" isEditAble={false} />
                 <CommonButton  title="SAVE" />
      </View>
             
    </View>
  )
}

export default MyProfile