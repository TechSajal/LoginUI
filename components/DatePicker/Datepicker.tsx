import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  Datepicker as DPKITTEN,
  IconElement,
  Layout,
} from '@ui-kitten/components';
import {Icon} from 'react-native-eva-icons';
const Datepicker = ({IsHeadingThere,heading,date,setdate}) => {
  const calendericon = () => (
    <Icon name="calendar-outline" style={styles.icon} fill="black" />
  )
  return (
    <View>
      <View style={styles.secondcontainer}>
        {IsHeadingThere === true ? (
          <Text style={styles.heading}>{heading}</Text>
        ) : null}
      </View>
      <DPKITTEN
        placeholder="Pick Date"
        date={date}
        style={styles.datepicker}
        min={new Date(1990,0,0)}
        max={new Date(2040,0,0)}
        onSelect={nextDate => setdate(nextDate)}
        accessoryRight={calendericon}
      />
     {/* {error ? <Text style={styles.error}>{error}</Text> : null} */}
    </View>
  );
};

export default Datepicker;
