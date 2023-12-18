import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import {CountryCode} from 'react-native-country-picker-modal'
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";

const Phoneno = (props: { phoneInput: React.LegacyRef<PhoneInput> | undefined; value: string | undefined; setValue: (arg0: string) => void; setFormattedValue: (arg0: string) => void; errors: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <><PhoneInput
          disabled={true}
          ref={props.phoneInput}
          defaultValue= {props.value}
          // {props.value}
          defaultCode="IN"
             placeholder="Enter Phone Number"
           containerStyle={{ borderRadius: 8, width: "100%",height:40, backgroundColor: '#F6F7F9', shadowColor: "#00000000", borderWidth: 0.3, borderColor: '#BEBAB3' }}
           textContainerStyle={{ borderTopRightRadius: 10, borderBottomRightRadius: 10, height: 40, backgroundColor: 'rgba(0,0,0,0)', }}
            countryPickerButtonStyle={{ borderRightWidth: 1, borderRightColor: "#BEBAB3" }}
          textInputStyle={{ height:35,padding:0,fontSize:14}}
          layout="second"
          onChangeText={(text) => {
              props.setValue(text);
          } }
          onChangeFormattedText={(text) => {
              props.setFormattedValue(text);
          } }
          withDarkTheme
          withShadow
          autoFocus 
          />
          {props.errors ? <Text style={styles.error}>{props.errors}</Text> : null}
          </>
  )
}

export default Phoneno