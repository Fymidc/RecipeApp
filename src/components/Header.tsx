import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Header = () => {
  return (
    <View style={style.backGround} >
      <Text style={{fontSize:18}} >Daily Recipe</Text>
      <MaterialCommunityIcons name='teddy-bear' size={30} color={"orange"} />
    </View>
  )
}

const style = StyleSheet.create({
    backGround:{
        flex:1,
        padding:25,
        marginBottom:20,
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default Header