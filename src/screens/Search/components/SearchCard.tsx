import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParam } from '../../../types';
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' };

type HomeScreenNavigationProp = NativeStackNavigationProp<
    HomeStackParam,
    "Home"
>


const SearchCard = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>()

    return (
        <TouchableOpacity activeOpacity={0.9} style={style.backGround} onPress={() => navigation.navigate("Detail")} >

            {/* flatlist ile scroll ekle             */}

            <ImageBackground source={image} style={style.image} resizeMode='cover' >
                <View style={{ flex: 1, justifyContent: "space-between", padding: 20 }} >

                    <View style={{ flex: 3, flexDirection: "row", justifyContent: "space-between" }} >
                        <View style={{ backgroundColor: "white", height: "30%", borderRadius: 10 }} >

                            <Text style={{ color: "black", padding: 5, textAlign: "center" }} >Orange based</Text>
                        </View>
                        <Ionicons name='heart-outline' size={24} color={"white"} />

                    </View>

                    <View style={{ flex: 2 }} >

                        <Text style={{ color: "white", fontSize: 25, fontWeight: "800" }} >Food Name - Again food name</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} >

                        <Text style={style.text} >liked by 1.252</Text>
                        <Ionicons name='share-social-outline' size={24} color={"white"} />



                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    backGround: {
        backgroundColor: "yellow",
        elevation: 5,
        margin: 20,
        
        borderRadius: 20,

        overflow: "hidden"

    },
    image: {
        flex: 1,
        height: 250,
        justifyContent: 'center',

    },
    text: {
        color: "white"
    }
})
export default SearchCard