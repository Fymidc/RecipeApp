import { View, Text,TextInput } from 'react-native'
import React from 'react'
import IonIcons from "react-native-vector-icons/Ionicons"

const InputBar = () => {
  return (
    <View style={{backgroundColor:"white",elevation:2}} >
        <View style={{padding:10,flexDirection:"row",alignItems:"center"}} > 
        <IonIcons  style={{ marginHorizontal: 15 }}name='search-outline' size={19} />
        <TextInput  placeholder='Search a new taste...' />
        </View>
    </View>

    
  )
}

export default InputBar