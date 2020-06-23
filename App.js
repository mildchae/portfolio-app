import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Platform, ScrollView } from 'react-native';

import Constants from "expo-constants";


const HEADER_MIN_HEIGHT = 80
const HEADER_MAX_HEIGHT = 200

function App() {
  const scrollYAnimatedValue  =  useRef(new Animated.Value(0)).current
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...Array(50).keys()])
  }, [])

  const headerHeight = scrollYAnimatedValue.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    }
  )
  const borderRadius = scrollYAnimatedValue.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [25, 5],
      extrapolate: 'clamp'
    }
  )
  useEffect( () => {
    console.log(headerHeight)
  })
  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
        )}
      >
        {
          data.map((item, key) => (
            <View key={key}>
              <Text style={styles.itemText}>Row No : {item}</Text>
            </View>
          ))
        }
      </ScrollView>
      <Animated.View 
        style={[styles.animatedHeaderContainer, 
          {
            height:headerHeight, 
            borderBottomLeftRadius: borderRadius, 
            borderBottomRightRadius: borderRadius}]}
      >
        <Text>
          12312
        </Text>
      </Animated.View>
    </View>

  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animatedHeaderContainer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'rgb(133,162,228)',
      
    },
  }
)


export default App;
