import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={style.backGround} >
      <Text>appName</Text>
      <Text>User logo</Text>
    </View>
  )
}

const style = StyleSheet.create({
    backGround:{
        backgroundColor:"red",
        padding:25,
        marginBottom:20,
        height:80,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default Header