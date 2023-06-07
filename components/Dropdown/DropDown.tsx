import { View, Text } from 'react-native'
import React from 'react'
import { RenderProp } from '@ui-kitten/components/devsupport';
import { Select,SelectItem,TextProps,IndexPath, Layout } from '@ui-kitten/components';
import styles from './styles';
const DropDown = ({IsHeadingThere,heading,data,selectedIndex,setSelectedIndex,displayvalue}) => {
    const renderOption = (
        title: React.ReactText | RenderProp<TextProps> | undefined,
      ): React.ReactElement => <SelectItem title={title} />;
  return (
    <Layout
      level='1'>
       <View style={styles.secondcontainer}>
        {IsHeadingThere === true?<Text style={styles.heading} >{heading}</Text>:null}
        </View>
       <Select
          style={styles.select}
          placeholder="Select"
          value={displayvalue}
          selectedIndex={selectedIndex}
          onSelect={(index: IndexPath) => setSelectedIndex(index)}>
          {data.map(renderOption)}
        </Select>
    </Layout>
  )
}

export default DropDown