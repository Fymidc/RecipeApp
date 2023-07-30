import { View, Text, Image, ScrollView } from 'react-native'
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


const data = {
  name: "STRAWBERRY CAKE",
  image: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  user: "Lia Marberlt",
  recipeDescription: "its a delicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekedelicious food and easy to make. we love it and every weekend we cook it everyweekendious food and easy to make. we love it and every weekend we cook it everyweekend",
  ingredients: {
    name: "Bread",
    amount: 5
  }
}


const DetailScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <View style={{ flex: 1, backgroundColor: "white" }} >

      <View style={{ flex: 2 }} >


        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          alignItems: "center"
        }} >

          <View style={{ backgroundColor: "white", borderRadius: 10, elevation: 2 }} >

            <Ionicons style={{ padding: 5 }} onPress={() => navigation.goBack()} name='arrow-back-outline' size={25} />
          </View>

          <View style={{ backgroundColor: "white", borderRadius: 10, elevation: 3 }} >

            <Feather style={{ padding: 5 }} name='more-horizontal' size={25} />
          </View>

          {/* more tıklayınca modal çıkar */}

        </View>

        <View style={{ flex: 1, padding: 10, alignItems: "flex-start", justifyContent: "center" }} >
          <Text style={{ fontSize: 23, color: "black", margin: 10 }} >{data.name}</Text>
        </View>
      </View>

      <View style={{ flex: 8 }} >
        <ScrollView >
          <View style={{ flex: 7, backgroundColor: "green", margin: 10, borderRadius: 20, overflow: "hidden" }} >
            <Image source={{ uri: data.image }} style={{ flex: 1, width: "100%", height: 250 }} />
          </View>

          <View style={{ flex: 1 }} >


            <View style={{ flex: 3, padding: 10, justifyContent: "space-around", margin: 10 }} >
              <Text style={{ color: "grey", fontSize: 13,marginBottom:10 }} >Recipe By: <Text style={{ color: "tomato", fontSize: 16 }} > {data.user}</Text> </Text>
              <Text style={{ color: "grey", minHeight: "25%" }} >{data.recipeDescription}</Text>
            </View>


            <View style={{ flex: 5, padding: 10, margin: 10 }} >
              <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }} >INGREDIENTS</Text>

              <View style={{ flex: 1 }} >

                <ScrollView contentContainerStyle={{ padding: 10 }} >
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row" ,justifyContent:"space-around",marginVertical:5}} >

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600" }} > - {data.ingredients.name}</Text>
                    <Text style={{ fontSize: 16, color: "grey" }} >{data.ingredients.amount}</Text>
                  </View>
                  
                </ScrollView>
              </View>


            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailScreen