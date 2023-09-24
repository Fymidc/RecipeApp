import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RecipeCard from '../Home/components/RecipeCard'
import IonIcons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const ProfileScreen = () => {

  const created:boolean = false

  const EmptyList = () => {
    return (
      <View style={{ flex: 1, marginTop: 50, justifyContent: "flex-start", alignItems: "center", marginHorizontal: 15 }} >
        <Text style={{ fontSize: 16, color: "grey" }} >No recipes yet</Text>
        <Text style={{ textAlign: "center", color: "grey" }} >You haven't created any recipes. Write your first one and se it here.</Text>
        <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: "grey", padding: 8, borderRadius: 10, marginVertical: 10 }} >
          <Text>Create a recipe</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }} >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15 }} >

        <View style={{ flex: 2, flexDirection: "row", alignItems: "center", paddingHorizontal: 5 }} >

          <View  >
          <MaterialCommunityIcons name='teddy-bear' size={30} color={"orange"} />

          </View>

          <View style={{ paddingHorizontal: 15 }} >
            <Text>Fatihbodur</Text>
            <Text>id03234234</Text>
          </View>

        </View>

        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
         <IonIcons name='stats-chart-sharp'  size={20}/>
         <IonIcons name='settings-outline'  size={20}/>
         <Feather name='more-vertical'  size={20}/>
        </View>

      </View>

      <View style={{ flex: 10 }} >

        <View style={{ flex: 1, alignItems: "flex-start", padding: 10 }} >

          <Text style={{ fontSize: 16, color: "black" }} >Your Recipes</Text>
        </View>

        <View style={{ flex: 1, margin: 10, borderRadius: 20, borderWidth: 0.5, borderColor: "grey" }}>

          <TextInput style={{ paddingHorizontal: 15 }} placeholder='Search 0 recipes...' />
        </View>

        <View style={{ flex: 10 }} >
          {created ?
            <View style={{ flex: 8 }} >
            <ScrollView  >
    
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </ScrollView>
          </View> 
           
           : <EmptyList /> }
         
        </View>


      </View>
    </View>
  )
}

export default ProfileScreen