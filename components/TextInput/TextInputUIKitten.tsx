import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Input, Layout} from '@ui-kitten/components';
import colors from '../../styles/colors';
const TextInputUIKitten = ({
  isMultiline,
  isEditable,
  outputText,
  placeholder,
  value,
  setValue,
  KeyboardType
}) => {
  // useEffect(() => {
  //   TextInputUIKitten;
  // }, [value, isEditable, outputText]);
  return (
    <View>
      <Input
        disabled={!isEditable}
        style={[
          styles.input,
          {
            backgroundColor:
              isEditable === true
                ? colors.TextUIKisEditable
                : colors.TextUIKisNotEditable,
          },
        ]}
        textStyle={{color: colors.CommonBlackColour}}
        value={value}
        keyboardType ={KeyboardType}
        placeholder={placeholder}
        onChangeText={nextValue => setValue(nextValue)}
        multiline={isMultiline === true ? true : false}
      />
    </View>
  );
};

export default TextInputUIKitten;

const styles = StyleSheet.create({
  input: {
    width: 220,
    textAlign: 'left',
    borderRadius: 10,
  },
});
