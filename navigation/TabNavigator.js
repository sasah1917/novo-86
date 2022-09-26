import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import FeedScreen from "../screens/FeedScreen"
import CreatePost from "../screens/CreatePost";
import { TabBarIcons } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screensOptions={({ route }) => ({
            tabBarIcon: ({ focused, color,size}) => {
                let iconName;
                if(route.name === 'Feed'){
                    iconName = focused
                    ?'book'
                    :'book-outline';
                } else if(route.name === 'CreatePost'){
                    iconName = focused ?'create' : 'create-outlne'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}
        tabBarOptions={{
            activeTintColor:'Tomato',
            inactiveTintColor: 'Gray'
        }}>
            
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreatePost" component={CreatePost}/>
        
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;