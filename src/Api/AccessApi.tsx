import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRequest, postRequest} from './api'
import { Text } from '@ui-kitten/components'
import { data } from './utils'
const AccessApi = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    getData()
    putData()
  },[])

  const getData = async() =>{
    await getRequest().then(res=>{
      setData(res.data)
    }).catch(error =>{
      console.log(error)
    })
  }
  const sentData:data={
    userId: 1,
    id: 1,
    title:"Sajal Kaushal",
    body: "SDE Intern in Primathon Technology Ventures Pvt. Lmt."
  }
  const putData = async() =>{
    await postRequest(sentData)
    .then(res =>(
       console.log(res.data)
    ))
  }

  return (
    <View style={{height:"100%"}} >
      <ScrollView>
      {data.map(item =>(
        <View style={{marginHorizontal:16,paddingVertical:8,borderBottomColor:"black",borderBottomWidth:0.3}} >
          <Text category='h6' key={item.id}>{item.title}</Text>
         <Text category='c2' >{item.body}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

export default AccessApi

const styles = StyleSheet.create({})