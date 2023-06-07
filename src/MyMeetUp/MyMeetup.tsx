import { View, Text,Image,TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Platform,Dimensions} from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import styles from './styles'
import { ImageAssets } from '../../assets/images/imageAssets'
import DropDown from '../../components/Dropdown/DropDown'
import { NoOfPeople,theme,StartTime,restaurant } from '../../components/Helper/data'
import { IndexPath } from '@ui-kitten/components'
import Datepicker from '../../components/DatePicker/Datepicker'
import TextInputDetails from '../../components/TextInput/TextInputDetails'
import CommonButton from '../../components/button/Loginbutton/CommonButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const MyMeetup = ({navigation}) => {
    // keyboard
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const dimention = Dimensions.get('window').height
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
          setKeyboardHeight(e.endCoordinates.height);
        });
    
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardHeight(0);
        });
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
    //no of people
    const [selectedPeopleIndex, setSelectedPeopleIndex] = useState<IndexPath>(new IndexPath(0),);
    const displayPeopleValue = NoOfPeople[selectedPeopleIndex.row]
   
    // theme
    const [selectedThemeIndex, setSelectedThemeIndex] = useState<IndexPath>(new IndexPath(0),);
    const displayThemeValue = theme[selectedThemeIndex.row]
    
    //date
    const [date, setdate] = useState(new Date());

    //time
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<IndexPath>(new IndexPath(0),);
    const displayTimeValue = StartTime[selectedTimeIndex.row]

    //restaurant
    const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState<IndexPath>(new IndexPath(0),);
    const displayRestaurantValue = restaurant[selectedRestaurantIndex.row]

    // describe meetup
     const [meetup,setmeetup] = useState("")

    return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex:1,backgroundColor:"#ffffff"}} extraScrollHeight={keyboardHeight + dimention/4 } enableOnAndroid={true} > 
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
           <Image style={styles.image} source={ImageAssets.MyMeetupImage} />
           <TouchableOpacity style={styles.backbutton} >
           <Image style={{width:40,height:40}} source={ImageAssets.backbutton} />
           </TouchableOpacity>
        <View style={styles.secondContainer}>
           <View style={styles.TextContainer}>
             <Text style={styles.textheading}>My Meetup</Text>
             <Text style={styles.textSubheading} >Meet & greet fellow colleagues & tenants</Text>
           </View>
           <View style={styles.NoOfPeopleContainer}>
                <DropDown
                  IsHeadingThere={true}
                  heading="No of People"
                  data={NoOfPeople}
                  selectedIndex={selectedPeopleIndex}
                  setSelectedIndex={setSelectedPeopleIndex}
                  displayvalue={displayPeopleValue}
                />
                 <DropDown
                  IsHeadingThere={true}
                  heading="Theme"
                  data={theme}
                  selectedIndex={selectedThemeIndex}
                  setSelectedIndex={setSelectedThemeIndex}
                  displayvalue={displayThemeValue}
                />
           </View>
           <View style={styles.DateContainer} >
                <Datepicker
                  date={date}
                  setdate={setdate}
                  IsHeadingThere={true}
                  heading="Date"
                />
                <DropDown
                  IsHeadingThere={true}
                  heading="Time"
                  data={StartTime}
                  selectedIndex={selectedTimeIndex}
                  setSelectedIndex={setSelectedTimeIndex}
                  displayvalue={displayTimeValue}
                />
           </View>
           <View style={styles.RestaurantContainer} >
           <DropDown
                  IsHeadingThere={true}
                  heading="Select Restaurant"
                  data={restaurant}
                  selectedIndex={selectedRestaurantIndex}
                  setSelectedIndex={setSelectedRestaurantIndex}
                  displayvalue={displayRestaurantValue}
                />
           </View>
           <View style={styles.DescribeMeetup}> 
              <TextInputDetails
               ShowErrorOrNot={()=> null}
               IsSelectFromContact={false}
               IsHeadingThere={true}
               heading="Describe Meetup"
               isnumeric={false}
               ispassword={false}
               title="Hi,Akash invites..."
               infm={meetup}
               setinfm={text =>{
                  setmeetup(text)
               }}
              />
           </View>
           <TouchableOpacity style={{marginHorizontal:16 }} >
           <CommonButton onpress={()=>
         navigation.navigate("myProfile")
         } title='Host meetup' />
           </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default MyMeetup