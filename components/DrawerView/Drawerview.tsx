import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { ImageAssets } from '../../assets/images/imageAssets';
const Drawerview = () => {
    const navigation = useNavigation()
  return (
    <View  style={styles.mainContainer}>
           <View style={styles.secondContainer} >
             <TouchableOpacity onPress={()=>  navigation.dispatch(DrawerActions.closeDrawer())} >
              <Image style={styles.imageCross} source={ImageAssets.cross}  />
             </TouchableOpacity>
              <View style={styles.secondContainerContent}>
                  <Text style={styles.secondContainerContentMainText} >Hi Akash</Text>
                  <Text style={styles.secondContainerContentText} >UPIN:A4827</Text>
              </View>
           </View>
           <View  style={styles.thirdContainer}>
              <View style={styles.myProfileContainer}>
                   <Image  source={ImageAssets.userProfile} style={styles.logoProfile}/>
                   <TouchableOpacity onPress={()=> {
            navigation.dispatch(DrawerActions.closeDrawer())
            navigation.navigate("myProfile")
          }} >
                   <Text style={styles.secondContainerContentText} >My Profile</Text>
                   </TouchableOpacity>
              </View>
           </View>
      </View>
  )
}

export default Drawerview

