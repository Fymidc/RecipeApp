import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'

import { View, Alert, TouchableOpacity, Modal, StyleSheet, Button } from 'react-native';
import IonIcons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import CreateScreen from '../screens/Create/CreateScreen';

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [showModal, setShowModal] = useState(false);

    console.log(showModal)
    return (
        <View style={{ flexDirection: 'row', height: "7%", alignItems: "center" }}>

            <Modal
                animationType={'slide'}
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    Alert.alert("Are you sure?","You will lose the entered data.",[
                        {
                          text:"Cancel",
                          onPress: ()=> console.log("cancel pressed"),
                          style: "cancel"
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed'),style:"default"},
                      ])
                }}>
                {/*All views of Modal*/}
                {/*Animation can be slide, slide, none*/}
                <View style={styles.modal}>
                    <View style={{flex:1}}>

                        <CreateScreen openmodal={setShowModal} showmodal={showModal} />
                    </View>
                    
                </View>
            </Modal>


            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };


                return (
                    label === "HomeTab" ? (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}

                            style={{ flex: 1, alignItems: "center", height: 59, justifyContent: "center" }}
                        >

                            <View style={{ alignItems: "center", justifyContent: "center" }} >
                                <IonIcons style={{ color: isFocused ? 'black' : 'grey' }} size={26} name={isFocused ? 'home' : 'home-outline'} />

                            </View>

                        </TouchableOpacity>
                    )
                        : label === "SearchTab" ?
                            (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    key={index}
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={onPress}

                                    style={{ flex: 1, alignItems: "center", height: 59, justifyContent: "center" }}
                                >

                                    <View style={{ alignItems: "center", justifyContent: "center" }} >
                                        <IonIcons style={{ color: isFocused ? 'black' : 'grey' }} size={26} name={isFocused ? 'search' : 'search-outline'} />

                                    </View>

                                </TouchableOpacity>
                            )
                            : label === "CreateTab" ?

                                (
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        key={index}
                                        accessibilityRole="button"
                                        accessibilityState={isFocused ? { selected: true } : {}}
                                        accessibilityLabel={options.tabBarAccessibilityLabel}
                                        testID={options.tabBarTestID}
                                        onPress={() => { onPress(); setShowModal(!showModal) }}

                                        style={{ flex: 1, alignItems: "center", height: 59, justifyContent: "center" }}
                                    >

                                        <View style={{ alignItems: "center", justifyContent: "center" }} >
                                            <AntDesign style={{ color: isFocused ? 'black' : 'grey' }} size={26} name={isFocused ? 'pluscircle' : 'pluscircleo'} />

                                        </View>

                                    </TouchableOpacity>
                                )

                                : label === "FavoriteTab" ?

                                    (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            key={index}
                                            accessibilityRole="button"
                                            accessibilityState={isFocused ? { selected: true } : {}}
                                            accessibilityLabel={options.tabBarAccessibilityLabel}
                                            testID={options.tabBarTestID}
                                            onPress={onPress}

                                            style={{ flex: 1, alignItems: "center", height: 59, justifyContent: "center" }}
                                        >

                                            <View style={{ alignItems: "center", justifyContent: "center" }} >
                                                <IonIcons style={{ color: isFocused ? 'black' : 'grey' }} size={26} name={isFocused ? 'heart' : 'heart-outline'} />

                                            </View>

                                        </TouchableOpacity>
                                    )

                                    : label === "UserTab" ? (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            key={index}
                                            accessibilityRole="button"
                                            accessibilityState={isFocused ? { selected: true } : {}}
                                            accessibilityLabel={options.tabBarAccessibilityLabel}
                                            testID={options.tabBarTestID}
                                            onPress={onPress}

                                            style={{ flex: 1, alignItems: "center", height: 59, justifyContent: "center" }}
                                        >

                                            <View style={{ alignItems: "center", justifyContent: "center" }} >
                                                <FontAwesome style={{ color: isFocused ? 'black' : 'grey' }} size={26} name={isFocused ? 'user' : 'user-o'} />

                                            </View>



                                        </TouchableOpacity>
                                    ) : ""
                )



            })}
        </View>
    );
}

const styles = StyleSheet.create({

    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
  
});