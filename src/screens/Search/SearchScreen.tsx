import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import InputBar from './components/InputBar'
import SearchCard from './components/SearchCard'
import SearchBg from "../../images/SearchBg.svg"

const SearchScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <InputBar />

            <View style={{ flex: 1,alignItems:"center" }} >
               
                <SearchBg width="200%" height="200%" />


                <ScrollView>

                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                </ScrollView>
            </View>
        </View>
    )
}

export default SearchScreen