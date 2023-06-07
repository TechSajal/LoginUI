import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login/Login";
import Userdetails from "./src/UserDetails/Userdetails";
import MyProfile from "./src/MyProfile/MyProfile";
import MyMeetup from "./src/MyMeetUp/MyMeetup";
import { useTheme } from "@ui-kitten/components";
const stack = createNativeStackNavigator()
const MyStack = () =>{
  return(
     <NavigationContainer>
        <stack.Navigator>
        <stack.Screen
            name="Login"
            options={{headerShown:false}}
            component={Login}
          />
          <stack.Screen
             name="userDetails"
             options={{headerShown:false}}
             component={Userdetails}
          />
           <stack.Screen
            name="MyMeetup"
            options={{headerShown:false}}
            component={MyMeetup}
          />
          <stack.Screen
             name="myProfile"
             options={{headerShown:false}}
             component={MyProfile}
          />
        </stack.Navigator>
     </NavigationContainer>
  )
}

export default MyStack;