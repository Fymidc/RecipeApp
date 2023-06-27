/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
 
  StatusBar,
  StyleSheet,
 
  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import Navigation from './src/Navigation/Navigation';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "grey" : "white",
    flex:1

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation/>
    </SafeAreaView>
  );
}



export default App;
