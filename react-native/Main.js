// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  state = { currentUser: null }

render() {
    const { currentUser } = this.state

return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
		<TouchableOpacity style={styles.logout} onPress={ () => {firebase.auth().signOut(); this.props.navigation.navigate("SignUp") }}>
		  <Text>Logout</Text>
		</TouchableOpacity>
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
