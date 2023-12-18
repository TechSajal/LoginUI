import { View, Text } from 'react-native'
import React from 'react'
import { RenderProp } from '@ui-kitten/components/devsupport';
import { Select,SelectItem,TextProps,IndexPath, Layout } from '@ui-kitten/components';
import styles from './styles';
const DropDown = ({IsHeadingThere,heading,data,selectedIndex,setSelectedIndex,displayvalue,minWidth}) => {
    const renderOption = (
        title: React.ReactText | RenderProp<TextProps> | undefined,
      ): React.ReactElement => <SelectItem title={title} />;
  return (
    <View>
       <View style={styles.secondcontainer}>
        {IsHeadingThere === true?<Text style={styles.heading} >{heading}</Text>:null}
        </View>
       <Select
          style={[styles.select,{minWidth:minWidth}]}
          placeholder={"Select Blood Group"}
          value={displayvalue}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          {data.map(renderOption)}
        </Select>
    </View>
  )
}

export default DropDown