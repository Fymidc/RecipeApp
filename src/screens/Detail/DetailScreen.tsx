import { View, Text } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParam } from '../../types'
import { useNavigation } from '@react-navigation/native'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParam,
  "Home"
>


const DetailScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <View style={{ flex: 1,backgroundColor:"white" }} >

      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        alignItems: "center"
      }} >

        <View style={{backgroundColor:"white"  ,borderRadius:10,elevation:2 }} >

          <Ionicons style={{padding:5}} onPress={() => navigation.goBack()} name='arrow-back-outline' size={25} />
        </View>

        <View style={{backgroundColor:"white",borderRadius:10,elevation:3}} >

          <Feather style={{padding:5}}  name='more-horizontal' size={25} />
        </View>

        {/* more tıklayınca modal çıkar */}

      </View>

      <View style={{ flex: 2, padding: 10, alignItems: "flex-start", justifyContent: "center" }} >
        <Text style={{ fontSize: 23, color: "black" }} >STRAWBERRY CAKE</Text>
      </View>

      <View style={{ flex: 7, backgroundColor: "green", padding: 10 }} >
        <Text>FOOD Images</Text>
      </View>

      <View style={{ flex: 3, backgroundColor: "tomato", padding: 10, justifyContent: "space-around" }} >
        <Text>Recipe By: User</Text>
        <Text>Recipe Description dlahjsbdlsavdljshabdljsba daskdlskab dklsabdkljbsa kdjbsak dj</Text>
      </View>


      <View style={{ flex: 5, backgroundColor: "grey", padding: 10 }} >
        <Text style={{ fontSize: 18 }} >INGREDIENTS</Text>

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", marginHorizontal: -85, padding: 10 }} >
          <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} >Bread</Text>
          <Text style={{ fontSize: 16, color: "black" }} >4 pcs</Text>
        </View>


      </View>

    </View>
  )
}

export default DetailScreen