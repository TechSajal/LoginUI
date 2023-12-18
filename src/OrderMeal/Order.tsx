import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './styles'
import OrderYourMeal from '../OrderComponent/OrderYourMeal'
import ViewMealToday from '../OrderComponent/ViewMealToday'
const Order = () => {
  const [Component,SetComponent] = useState(1)
  return (
    <View style={style.container}>
      <View style={style.chooseContainer} >
          <TouchableOpacity style={Component === 1 ? style.chooseWhiteContainer:style.chooseTransparentContainer } onPress={()=> SetComponent(1)}>
            <View>
              <Text style={style.text} >Order Your Meal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={Component === 2 ? style.chooseWhiteContainer:style.chooseTransparentContainer } onPress={()=> SetComponent(2)}>
            <View>
              <Text style={style.text} >View Today's Menu</Text>
            </View>
          </TouchableOpacity>
      </View>
      <View style={style.SecondContainer}>
        {Component === 1 ? <OrderYourMeal/> :<ViewMealToday/>}
      </View>
    </View>
  )
}

export default Order