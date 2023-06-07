import {View, Text, Keyboard, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {TextInput as TextInputRN} from 'react-native';
const TextInputDetails = ({ShowErrorOrNot,errorsize,IsSelectFromContact,IsHeadingThere,heading,error, isnumeric, title, infm, setinfm,ispassword}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.secondcontainer}>
        {IsHeadingThere === true?<Text style={styles.heading} >{heading}</Text>:null}
        <TouchableOpacity>
        {IsSelectFromContact === true?<Text style={styles.contectheading} >+Select from contact list</Text>:null}
        </TouchableOpacity>
      </View>
      <TextInputRN
        value={infm}
        onChangeText={e =>{
           setinfm(e)
           {e===null || e.length ===0}{   
              ShowErrorOrNot()
           }
           
        }}
        style={styles.border}
        placeholder={title}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={ispassword ? true : false}
        keyboardType={isnumeric ? 'numeric' : 'default'}
      />
      {
       infm.length !== 0 ? 
       error? <Text style={errorsize === 14 ? styles.errorSize14 : styles.errorSize12}>{error}</Text> : null 
      : null
      }
    </View>
  );
};

export default TextInputDetails;
