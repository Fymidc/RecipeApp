import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RecipeCard = () => {
    return (
        <View style={style.backGround} >
          <Text>appName</Text>
          <Text style={{flexWrap:"wrap",paddingHorizontal:15}} > Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. 
             Perspiciatis, ex quisquam. Repudiandae molestias possimus at,
              consequuntur natus laboriosam 
              repellat veritatis accusantium quo ipsum libero, 
              delectus aperiam fugit necessitatibus minima perspiciatis? </Text>
        </View>
      )
    }
    
    const style = StyleSheet.create({
        backGround:{
            backgroundColor:"yellow",
            padding:25,
            margin:20,
            height:400,
            borderRadius:20,
            
            flexDirection:"row",
            
            alignItems:"center"
        }
    })
export default RecipeCard