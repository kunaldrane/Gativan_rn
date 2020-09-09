import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Auth } from 'aws-amplify'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Gativan'
  }
  signOut = async () => {
    try {
      await Auth.signOut()
      console.log('signed out')
      console.log('Auth: ', Auth)
      this.props.updateAuth('auth')
    } catch (err) {
      console.log('error signing out...', err)
    }
  }
  render() {
    console.log('props: ', this.props)
    console.log('Auth:', Auth)
    const deviceId = Auth.user.attributes['custom:device_Id']
   // const kuldip = Auth.user.attributes.user.username
    //console.log('kuldip:', Kuldip)
    

    return (
      <View style={styles.body}>
        <View style={styles.headerbox}>
          <Text style={styles.header}>Gativan</Text>
          <Text style={styles.username}>KUNAL</Text>
        </View>
        <Text style={styles.title}>Todays Stats</Text>
        <View style={styles.row1}>
          <View style={styles.variablebox}>
            <Text style={styles.value}>0</Text>
            <Text style={styles.unit}>mm</Text>
            <Text style={styles.parameter}>Slackness</Text>
            <Text style={styles.parameter1}>(Avg)</Text>
          </View>
          <View style={styles.variablebox}>
            <Text style={styles.value}>0</Text>
            <Text style={styles.unit}>m/s2</Text>
            <Text style={styles.parameter}>Maximum Speed</Text>
            <Text style={styles.parameter1}>(Max)</Text>
          </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Trends</Text>
        <Text onPress={this.signOut} style={styles.link}>Sign Out</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f5597'
  },
  title:{
color:'#ffffff'
  },
  headerbox: {
    flexDirection:'row',
    alignItems: 'center',
    
  },
  header: {
    color: '#ffffff',
    fontSize: 50
  },
  username:{
    color: '#ffffff',
    fontSize: 20,
    alignSelf:'center'
  },
  row1:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  variablebox:{
    justifyContent:'center',
    alignItems:'center',
    height:300,
    width:300
  },
  parameter:{
    fontSize:30,
    color:"#ffffff"
  },
  parameter1:{
    fontSize:20,
    color:"#ffffff"
  },
  value:{
    fontSize:100,
    color:"#ffffff"
  },
  unit:{
    fontSize:20,
    color:"#ffffff"
  },
  link: {
    color: 'white',
    marginVertical: 5
  }
})

export default Home
