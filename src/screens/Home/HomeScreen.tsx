import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import RecipeCard from './components/RecipeCard'
import InfoCard from './components/InfoCard'

const HomeScreen = () => {
  return (
    <View>
        <Header/>

        <InfoCard/>

      <RecipeCard/>
    </View>
  )
}

export default HomeScreen