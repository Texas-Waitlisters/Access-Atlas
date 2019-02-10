// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
import { MapView } from 'react-native-maps'

export default class Map extends React.Component {
  state = { currentUser: null }

render() {
    const { currentUser } = this.state

return (
       <View>
	   <MapView
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}></MapView>
	   </View>
    )
  }

componentDidMount() {
  const { currentUser } = firebase.auth();
  this.setState({ currentUser })
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logout: {
	justifyContent: 'center',
	alignItems: 'center',
	padding: 10
  }
})
