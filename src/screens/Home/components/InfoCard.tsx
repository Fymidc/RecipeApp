import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const InfoCard = () => {
    return (
        <View style={{flex:1,marginHorizontal:30}} >

        <View style={style.backGround} >
          <Text style={{marginHorizontal:10}} >D & R</Text>
          <MaterialCommunityIcons name='star-shooting-outline' size={20} color={"orange"} />
          <Text style={{flexWrap:"wrap",paddingHorizontal:20}} > Lorem ipsum dolor,
             sit amet consectetur adipisicing elit. 
             Perspiciatis, ex quisquam. Repudiandae molestias possimus at,
               </Text>
        </View>
        </View>
      )
    }
    
    const style = StyleSheet.create({
        backGround:{
           
           
            borderRadius:20,
            
            
            flexDirection:"row",
            
            alignItems:"center"
        }
    })

export default InfoCard