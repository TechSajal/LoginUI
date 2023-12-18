import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './stylesOrderMeal'
import CommonButton from '../../components/button/Loginbutton/CommonButton'
import colors from '../../styles/colors'
import { ImageAssets } from '../../assets/images/imageAssets'
const OrderYourMeal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.FirstContainer} >
       <Text style={styles.TextHeading}>Your Subscription is Active</Text>
       <Text style={styles.TextSubHeading} >It is valid till 21 July 2023</Text>
       <CommonButton title="Edit Subscription" size="small" width="40%" height={40} color={colors.OrangeColor} onpress={()=>null } marginTop={20}/>
       <Text style={styles.TextSubDetails}>YOUR SUBSCRIPTION DETAILS</Text>
      </View>
      <View style={styles.SecondContainer}>
        <Image    source={ImageAssets.Thali} />
      </View>
    </View>
  )
}

export default OrderYourMeal