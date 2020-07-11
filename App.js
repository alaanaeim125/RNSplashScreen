import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <View style={styles.constiner}>
      {
        Platform.OS === 'ios' ?
          <StatusBar barStyle='light-content' />
          :
          <StatusBar barStyle="dark-content" />
      }
      <Text style={styles.title}>Hello In Home Screen</Text>
    </View>
  )
}

// export default App;

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#537895'
  },
  title: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
    fontWeight: 'bold'
  }
})