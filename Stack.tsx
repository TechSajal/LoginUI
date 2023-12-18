import React from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login/Login";
import MyProfile from "./src/MyProfile/MyProfile";
import FoodSearch from "./src/FoodSearch/FoodSearch";
import {createDrawerNavigator}  from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Drawerview from "./components/DrawerView/Drawerview";
import AccessApi from "./src/Api/AccessApi";
import Order from "./src/OrderMeal/Order";
import Userdetails from "./src/UserDetails/Userdetails";
import MyMeetup from "./src/MyMeetUp/MyMeetup";
import Foodcheckout from "./src/FoodCheckOut/Foodcheckout";
import asyncStorage from "./src/AsyncStorage/AsyncStorage";
import viewInvite from "./src/ViewInvite/viewInvite";
const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator();

const DrawerStack = () =>{
  return(
        <Drawer.Navigator drawerContent={props => <Drawerview{...props}/>}>
          <Drawer.Screen
           name="AppBottomStack"
           options={{headerShown: false}}
           component={Bottom}
          />
        </Drawer.Navigator>
  )
}


// function DrawerView() {
//   const navigation = useNavigation()
//   return (
//       <View>
//           <Text>Hi Sajal</Text>
//           <TouchableOpacity onPress={()=> {
//             navigation.dispatch(DrawerActions.closeDrawer())
//             navigation.navigate("myProfile")
//           }} >
//           <Text>Profile</Text>
//           </TouchableOpacity>
//           <Text>Access Card</Text>
//           <Text>Pending Visitor Approvals</Text>
//           <Text>My RSVPs</Text>
//           <Text>Discounts Availed</Text>
//           <Text>Help & Support</Text>
//           <Text>Settings</Text>
//           <Text>Logout</Text>
//       </View>
//   )
// }

const Bottom = () =>{
  return(
         <Tab.Navigator>
           <Tab.Screen
            name="Login"
            component={Login}
           />
            <Tab.Screen
            name="Async Storage"
            component={asyncStorage}
            />
            <Tab.Screen
             name="Food Search"
             component={FoodSearch}
            />
         </Tab.Navigator>
    //  <NavigationContainer>
    //     <stack.Navigator initialRouteName="FoodSearch">
    //     {/* <stack.Screen
    //          name="myProfile"
    //          options={{headerShown:false}}
    //          component={MyProfile}
    //       /> */}
    //     <stack.Screen
    //         name="order"
    //         options={{headerShown:false}}
    //         component={Order}
    //       />
    //     <stack.Screen
    //         name="Login"
    //         options={{headerShown:false}}
    //         component={Login}
    //       />
    //       {/* <stack.Screen
    //          name="userDetails"
    //          options={{headerShown:false}}
    //          component={Userdetails}
    //       /> */}
    //        <stack.Screen
    //         name="MyMeetup"
    //         options={{headerShown:false}}
    //         component={MyMeetup}
    //       />
    //       <stack.Screen
    //       name="FoodSearch"
    //       options={{headerShown:false}}
    //       component={FoodSearch}
    //      />
    //       <stack.Screen
    //         name="FoodCheckOut"
    //         options={{headerShown:false}}
    //         component={Foodcheckout}
    //       />
    //     </stack.Navigator>
    //  </NavigationContainer>
  )
}

const MyStack = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="AppDrawerStack"
          options={{headerShown:false}}
          component={DrawerStack}
         />
          <Stack.Screen
             name="myProfile"
             options={{headerShown:false}}
             component={MyProfile}
          />
          <Stack.Screen
             name="viewInvite"
             options={{headerShown:false}}
             component={viewInvite}
          />
          <Stack.Screen
             name="AccessApi"
             options={{headerShown:false}}
             component={AccessApi}
          />
        <Stack.Screen
            name="order"
            options={{headerShown:false}}
            component={Order}
          />
        <Stack.Screen
            name="Login"
            options={{headerShown:false}}
            component={Login}
          />
          <Stack.Screen
             name="userDetails"
             options={{headerShown:false}}
             component={Userdetails}
          />
           <Stack.Screen
            name="MyMeetup"
            options={{headerShown:false}}
            component={MyMeetup}
          />
          <Stack.Screen
          name="FoodSearch"
          options={{headerShown:false}}
          component={FoodSearch}
         />
          <Stack.Screen
            name="FoodCheckOut"
            options={{headerShown:false}}
            component={Foodcheckout}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MyStack;