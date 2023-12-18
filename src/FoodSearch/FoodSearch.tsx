import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import FoodComponent from '../../components/Food/FoodComponent'
import BottomFoodComponent from '../../components/Food/BottomFoodComponent'
import FoodSelectCategory from '../../components/Food/FoodSelectCategory'
const FoodSearch = () => {
  const [FilterID,SetFilterId] = useState(0)
  const [SelectName,SetSelectName] = useState("")
  // console.log(SelectName)
  return (
    <View style={{height:"100%",width:"100%"}} >
      <FoodSelectCategory selectname={(name)=>SetSelectName(name)} Filterid={FilterID}/>
      {FilterID === 1 ?
      <View style={{marginTop:10,marginBottom:80}} >
      <FoodComponent selectname={SelectName} Filterid={FilterID}/>
      </View>
      :
      <View style={{marginTop:10,marginBottom:115}} >
      <FoodComponent selectname={SelectName} Filterid={FilterID}/>
      </View>  
    }
      <BottomFoodComponent filterID={(id)=> SetFilterId(id)} />
      </View>
  )
}

export default FoodSearch