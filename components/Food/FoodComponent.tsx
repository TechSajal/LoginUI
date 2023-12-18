import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ImageAssets} from '../../assets/images/imageAssets';
import {Fooddata} from '../Helper/data';
import {debounce, throttle} from 'lodash';
import { useNavigation } from '@react-navigation/native';
const FoodComponent = ({selectname, Filterid}) => {
   const navigation = useNavigation()
   // 
  const debounceDelay = 100;
  //
  const [filteredData, SetFilteredData] = useState(Fooddata);
  const applyFilter = (searchID: number, name: String) => {
    console.log(name);
    if (searchID > 1 && name.length !== 0) {
      const FilterItem = Fooddata.filter(
        item => item.type === name && item.filterid === searchID,
      );
      SetFilteredData(FilterItem);
    }else if(searchID === 1){
      const FilterItem = Fooddata.filter(item => item);
      SetFilteredData(FilterItem);
    }else if (name.length === 0){
      const FilterItem = Fooddata.filter(item => item.filterid === searchID);
      SetFilteredData(FilterItem);
    }
  };
  const debouncedFilter = debounce(applyFilter, debounceDelay);
  useEffect(() => {
    selectname =""
    debouncedFilter(Filterid, selectname);
  }, [Filterid]);
  
  useEffect(() => {
   debouncedFilter(Filterid, selectname);
 }, [selectname]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.Image_Container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={item.image}
          />
          <Image
            style={styles.imageLogo}
            resizeMode="contain"
            source={item.logo}
          />
        </View>
        <View style={styles.Content_Container}>
          <View style={styles.heading_container}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#000000',
                fontStyle: 'normal',
              }}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('FoodCheckOut',{id:item.id,logo:item.logo,image:item.image,text:item.text,price:item.price,type:item.type})} >
              <Image
                style={styles.addButton}
                resizeMode="contain"
                source={ImageAssets.AddButton}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 13,
              color: '#000000',
              marginLeft: 8,
              marginTop: 5,
            }}>
            INR {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    // <View style={{height:"100%",backgroundColor:"#F4f4f4"}} >

    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
    // </View>
  );
};

export default FoodComponent;
