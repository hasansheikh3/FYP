import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import ManageInventoryScreen from './screens/ManageInventoryScreen'
import SettingScreen from './screens/SettingScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddDevice from './screens/AddDevice'
import { TabActions } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions = {{
            showLabel : false,
            style: {
                position : 'absolute',
                bottom : 25,
                left : 20,
                right : 20,
                elevation : 0,
                backgroundColor : '#000',
                borderRadius : 15,
                height : 90
            }
        }}>
            <Tab.Screen name='Home' component={HomeScreen}
            options={{
                taskBarIcon : ({focused})=> {
                    <View>
                        <Image 
                        source = {require('./assets/home.png')}/>
                        <Text>HOME</Text>
                    </View>
                }
            }}
            ></Tab.Screen>
            <Tab.Screen name='Settings' component={SettingScreen}></Tab.Screen>
            <Tab.Screen name='Manage Inventory' component={ManageInventoryScreen}></Tab.Screen>
            <Tab.Screen name='Profile' component={ProfileScreen}></Tab.Screen>
            <Tab.Screen name='Add Device' component={AddDevice}></Tab.Screen>


        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})
