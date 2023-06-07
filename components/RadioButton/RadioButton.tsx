import { View, Text } from 'react-native'
import React from 'react'
import styles from './radiobutton';
import { Radio, RadioGroup} from '@ui-kitten/components';
const RadioButton = ({selectedradioindex,setselectedradioindex,textarray}) => {
  return (
    <View>
      <RadioGroup
        style={styles.radiogroup}
       selectedIndex={selectedradioindex}
       onChange={index => setselectedradioindex(index)}
       >
        {textarray.map( element => {
          return( 
          <Radio>
             {element}
          </Radio>
          )
        })}
       {/* <Radio>
           {textarray[0]}
         </Radio>
         <Radio>
           {textarray[1]}
         </Radio> */}
      
      </RadioGroup>
    </View>
  )
}

export default RadioButton