import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from 'react-native-eva-icons';
import TextInputUIKitten from '../TextInput/TextInputUIKitten';
const Test = ({Value,setValue,isMultiline, Output, isEditAble, Heading, placeholder,KeyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.font_bold}>{Heading}</Text>
      <TextInputUIKitten
      KeyboardType={KeyboardType}
      value={Value}
      setValue={setValue}
        isMultiline={isMultiline}
        isEditable={isEditAble}
        outputText={Output}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Test;
