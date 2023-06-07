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
          ref={props.phoneInput}
          defaultValue={props.value}
          defaultCode="IN"
             placeholder="Enter Phone Number"
           containerStyle={{ borderRadius: 12, width: "100%", backgroundColor: '#00000000', shadowColor: "#00000000", borderWidth: 1, borderColor: '#BEBAB3' }}
           textContainerStyle={{ borderTopRightRadius: 12, borderBottomRightRadius: 12, height: 50, backgroundColor: 'rgba(0,0,0,0)', }}
            countryPickerButtonStyle={{ borderRightWidth: 1, borderRightColor: "#BEBAB3" }}
          textInputStyle={{ padding: 0 }}
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