import React from 'react';
import { Text, View, ScrollView, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

function HelloWorldApp() {
  return (
    <View  style={{flex:1, justifyContent:"flex-end", alignItems:"center", marginTop: Constants.statusBarHeight}}>
      <ScrollView style={{flexGrow: 1}}>
        <Text style={{}}>hello world!</Text>
        <View>
          <Text>More hello!</Text>
          <Image 
          source = {{ uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
          style= {{width:200, height:200}} />
        </View>
        <TextInput 
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue = "input somthing"
        />
      </ScrollView>
    </View>
  )
}
export default HelloWorldApp;
