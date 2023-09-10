import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FavoriteRecipeCard from './components/FavoriteRecipeCard'

const FavoriteScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={{ flex: 8 }} >
        <ScrollView  >

          <FavoriteRecipeCard />
          <FavoriteRecipeCard />
          <FavoriteRecipeCard />
         
        </ScrollView>
      </View>
    </View>
  )
}

export default FavoriteScreen