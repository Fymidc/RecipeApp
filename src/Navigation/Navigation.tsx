import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParam, StackParam, TabStackParam } from '../types'
import HomeScreen from '../screens/Home/HomeScreen'
import DetailScreen from '../screens/Detail/DetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const HomeScreenStack = createNativeStackNavigator<HomeStackParam>()

const Tab = createBottomTabNavigator<TabStackParam>()
const StackScreen = createNativeStackNavigator<StackParam>()

function HomeStack() {
    return(
         <HomeScreenStack.Navigator 
         screenOptions={{headerShown: false}}
         >
        <HomeScreenStack.Screen
            name='Home'
            component={HomeScreen}
        />
        <HomeScreenStack.Screen
            name='Detail'
            component={DetailScreen}
        />

    </HomeScreenStack.Navigator>
    )
   

}
function SearchStack() {

}
function CreateStack() {

}
function FavoriteStack() {

}
function UserStack() {

}


function TabStack() {
    return (
        <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeTab"
    >
        <Tab.Screen
            name='HomeTab'
            component={HomeStack}

        />
        <Tab.Screen
            name='SearchTab'
            component={SearchStack}
        />
        <Tab.Screen
            name='CreateTab'
            component={CreateStack}
        />
        <Tab.Screen
            name='FavoriteTab'
            component={FavoriteStack}
        />
        <Tab.Screen
            name='UserTab'
            component={UserStack}
        />
    </Tab.Navigator> 
    )
   


}




const Navigation = () => {
    return (
        <NavigationContainer  >
            <StackScreen.Navigator
                initialRouteName='Home'
            >
                <StackScreen.Screen
                    name='Home'
                    component={TabStack}
                />

            </StackScreen.Navigator>
        </NavigationContainer>
    )
}

export default Navigation