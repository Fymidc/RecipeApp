import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import RecipeCard from './components/RecipeCard'
import InfoCard from './components/InfoCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParam } from '../../types'



const HomeScreen = () => {
  return (
    <View style={{flex:1}} >
        <Header/>

        <InfoCard/>

      <RecipeCard  />
    </View>
  )
}

export default HomeScreen