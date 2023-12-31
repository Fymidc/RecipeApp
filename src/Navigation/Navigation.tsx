import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateStackParam, FavoriteStackParam, HomeStackParam, SearchStackParam, StackParam, TabStackParam, UserStackParam } from '../types'
import HomeScreen from '../screens/Home/HomeScreen'
import DetailScreen from '../screens/Detail/DetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchScreen from '../screens/Search/SearchScreen'
import CreateScreen from '../screens/Create/CreateScreen'
import { MyTabBar } from './MyTabBar'
import FavoriteScreen from '../screens/Favorite/FavoriteScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'

const HomeScreenStack = createNativeStackNavigator<HomeStackParam>()
const SearchScreenStack = createNativeStackNavigator<SearchStackParam>()
const CreateScreenStack = createNativeStackNavigator<CreateStackParam>()
const FavoriteScreenStack = createNativeStackNavigator<FavoriteStackParam>()
const UserScreenStack = createNativeStackNavigator<UserStackParam>()

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
      
    </HomeScreenStack.Navigator>
    )
   

}
function SearchStack() {
    return(
        <SearchScreenStack.Navigator 
        screenOptions={{headerShown: false}}
        >
       <SearchScreenStack.Screen
           name='Search'
           component={SearchScreen}
       />
     
   </SearchScreenStack.Navigator>
   )
}
function CreateStack() {
    return(
        <CreateScreenStack.Navigator 
        screenOptions={{headerShown: false }}
    
        >
       <CreateScreenStack.Screen
           name='Create'
           component={CreateScreen}
           //create screende basıldığında modal aç bunu için globalde state tut reduxdan sonra
           
          

           
       />
     
   </CreateScreenStack.Navigator>
   )
}
function FavoriteStack() {
    return(

    <FavoriteScreenStack.Navigator>
        <FavoriteScreenStack.Screen  
        name='Favorites'
    component={FavoriteScreen}     
    options={{headerTitleAlign:"center",headerTitleStyle:{fontSize:25,color:"black"}}}   
        
        />

    </FavoriteScreenStack.Navigator>
    )
}


function UserStack() {
    return(
        <UserScreenStack.Navigator>
            <UserScreenStack.Screen name="Profile"  component={ProfileScreen}
                options={{headerShown:false}}   

            />
        </UserScreenStack.Navigator>
        
    )

}


function TabStack() {
    return (
        <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeTab"
        tabBar={props => <MyTabBar {...props} />}
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
                    options={{headerShown:false}}
                />
                <StackScreen.Screen
                    name='Search'
                    component={TabStack}
                    options={{headerShown:false}}
                />
                <StackScreen.Screen
                
                    name='Detail'
                    component={DetailScreen}
                    options={{headerShown:false}}
                />

            </StackScreen.Navigator>
        </NavigationContainer>
    )
}

export default Navigation