import {View, Text, TouchableOpacity, Alert, Button} from 'react-native';
import React, {useEffect, useState, useReducer} from 'react';
import styles from './styles';
import {Actions} from '../../components/Reducer/Action';
import {reducer} from '../../components/Reducer/Reducer';
import {initialstate} from '../../components/Reducer/InitialState';
import DropDown from '../../components/Dropdown/DropDown';
import {IndexPath} from '@ui-kitten/components';
import TextInputDetails from '../../components/TextInput/TextInputDetails';
import CommonButton from '../../components/button/Loginbutton/CommonButton';
import Datepicker from '../../components/DatePicker/Datepicker';
import RadioButton from '../../components/RadioButton/RadioButton';
import {data} from '../../components/Helper/data';
import {StartTime} from '../../components/Helper/data';

const Userdetails = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0),);
  const [selectedStartTimeIndex, setSelectedStartTimeIndex] =useState<IndexPath>(new IndexPath(0));
  const [selectedEndTimeIndex, setSelectedEndTimeIndex] = useState<IndexPath>(new IndexPath(0));
  const displayvalue = data[selectedIndex.row];
  const displayStartvalue = StartTime[selectedStartTimeIndex.row];
  const [date, setdate] = useState(new Date());
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(0);  
  
  // start time & end time logic code
  const EndTime = StartTime.slice(selectedStartTimeIndex.row + 1);
  const displayEndValue = EndTime[selectedEndTimeIndex.row];
  // start time & end time code end
  
  const userEmail = () => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (state.Email.length === 0) {
      dispatch({
        type: Actions.EMAIL_ERROR,
        error: '*please enter email address',
      });
    } else if (reg.test(state.Email) === false) {
      dispatch({
        type: Actions.EMAIL_ERROR,
        error: '*please enter a valid email address',
      });
    } else {
      dispatch({type: Actions.EMAIL_ERROR, error: ''});
    }
  };
  
  const userName = () => {
    if (state.Name.length <= 4) {
      dispatch({
        type: Actions.NAME_ERROR,
        error: '*please enter min 4 digit name',
      });
    } else {
      dispatch({type: Actions.NAME_ERROR, error: ''});
    }
  };
  
  const userPhone = () => {
    if (state.Phone.length === 0) {
      dispatch({
        type: Actions.PHONE_ERROR,
        error: '*please enter phone number',
      });
    } else if (state.Phone.length < 8) {
      dispatch({
        type: Actions.PHONE_ERROR,
        error: '*number should not be less than 8',
      });
    } else if (state.Phone.length > 14) {
      dispatch({
        type: Actions.PHONE_ERROR,
        error: '*number should not be greater than 14',
      });
    } else {
      dispatch({type: Actions.PHONE_ERROR, error: ''});
    }
  };

  const noerror = () => {
    userEmail();
    userName();
    userPhone();
   if(state.Name && state.Email && state.Phone){
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(state.Name.length > 4 && state.Phone.length>=8 && reg.test(state.Email) === true){
        if(state.NameError.length === 0 && state.EmailError.length === 0 && state.PhoneError.length === 0){
          navigation.navigate('MyMeetup')
        }
      }else{
      }
   }else{
    Alert.alert('Plz fill all the fields')
   }
}

  return (
    <View style={styles.container}>
      <TextInputDetails
        ShowErrorOrNot={() => dispatch({type: Actions.NAME_ERROR, error: ''})}
        IsSelectFromContact={true}
        IsHeadingThere={true}
        heading={'Name'}
        ispassword={false}
        isnumeric={false}
        title="Enter your name"
        infm={state.Name}
        setinfm={text => {
          dispatch({type: Actions.NAME, text: text});
        }}
        error={state.NameError}
        errorsize={14}
      />
      <TextInputDetails
        ShowErrorOrNot={() => dispatch({type:Actions.EMAIL_ERROR, error: ''})}
        IsSelectFromContact={false}
        IsHeadingThere={true}
        heading={'Email ID'}
        ispassword={false}
        isnumeric={false}
        title="Enter Email id"
        infm={state.Email}
        setinfm={text => {
          dispatch({type: Actions.EMAIL, text: text});
        }}
        error={state.EmailError}
        errorsize={14}
      />
      <TextInputDetails
        ShowErrorOrNot={() => dispatch({type:Actions.PHONE_ERROR, error: ''})}
        IsSelectFromContact={false}
        IsHeadingThere={true}
        heading={'Mobile'}
        ispassword={false}
        isnumeric={true}
        title="Enter mobile number"
        infm={state.Phone}
        setinfm={(text: any) => {
          dispatch({type: Actions.PHONE, text: text});
        }}
        error={state.PhoneError}
        errorsize={14}
      />
      <View style={styles.container_dateanddrop}>
        <Datepicker
          date={date}
          setdate={setdate}
          IsHeadingThere={true}
          heading="Select date"
        />
        <DropDown
          IsHeadingThere={true}
          heading="Meeting Type"
          data={data}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          displayvalue={displayvalue}
        />
      </View>
      <View style={styles.container_dateanddrop}>
        <DropDown
          IsHeadingThere={true}
          heading="Start Time"
          data={StartTime}
          selectedIndex={selectedStartTimeIndex}
          setSelectedIndex={setSelectedStartTimeIndex}
          displayvalue={displayStartvalue}
        />
        <DropDown
          IsHeadingThere={true}
          heading="End Time"
          data={EndTime}
          selectedIndex={selectedEndTimeIndex}
          setSelectedIndex={setSelectedEndTimeIndex}
          displayvalue={displayEndValue}
        />
      </View>
      <View style={styles.radio_container}>
        <Text style={styles.textFrequentVisit}>Frequent Visit?</Text>
        <RadioButton
          selectedradioindex={selectedRadioIndex}
          setselectedradioindex={setSelectedRadioIndex}
          textarray={['Yes', 'No']}
        />
      </View>
      <TouchableOpacity style={{marginTop: 40}}>
        <CommonButton
          onpress={() =>             
            noerror()
          }
          title="Next"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Userdetails;
