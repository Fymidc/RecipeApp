import { View,ScrollView , Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import RecipeCard from './components/RecipeCard'
import InfoCard from './components/InfoCard'




const HomeScreen = () => {
  return (
    <View style={{flex:1 ,backgroundColor:"white"}} >
        <Header/>

        <InfoCard/>
    
    <View style={{flex:8}} >
    <ScrollView  >

      <RecipeCard  />
      <RecipeCard  />
      <RecipeCard  />
      <RecipeCard  />
    </ScrollView>
    </View>
    </View>
  )
}

export default HomeScreen