import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {dataForSelectCategory} from '../Helper/data';
const FoodSelectCategory = ({Filterid,selectname}) => {
  const [filteredData, SetFilteredData] = useState(dataForSelectCategory);
  const [select,Setselect] = useState(0)
  const applyFilter = (searchID: number) => {
    if (searchID === 1) {
      const FilterItem = dataForSelectCategory.filter(
        item => item.restaurantName === 'all',
      );
      SetFilteredData(FilterItem);
    } else if (searchID === 2) {
      const FilterItem = dataForSelectCategory.filter(
        item => item.restaurantName === 'subway',
      );
      SetFilteredData(FilterItem);
    } else if (searchID === 3) {
      const FilterItem = dataForSelectCategory.filter(
        item => item.restaurantName === 'Haldirams',
      );
      SetFilteredData(FilterItem);
    }else{
        const FilterItem = dataForSelectCategory.filter(
          item => item.restaurantName === 'all',
        );
        SetFilteredData(FilterItem);
    }
  };
  useEffect(() => {
    applyFilter(Filterid);
  }, [Filterid]);

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={() => [Setselect(item.id),selectname(item.text)]}>
      {item.id === select ?  
        <View style={{ borderBottomColor:"orange",
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,}} >
        <Text style={{fontSize: 13,marginBottom:5,fontWeight: '500', color: 'orange'}}>
          {item.text}
        </Text>
        </View>
      
      :
      <View style={{ borderBottomColor:"transparent",
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,}}>
        <Text style={{fontSize: 13,marginBottom:5,fontWeight: '500', color: 'black'}}>
          {item.text}
        </Text>
        </View>
      }

      </TouchableOpacity>
    );
  };
  return (
    <>
      {filteredData.length !== 0 ? (
        <View
          style={{
            width: '100%',
            height: 28,
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
          <FlatList
            data={filteredData}
            renderItem={renderItems}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) :  null}
    </>
  );
};

export default FoodSelectCategory;
