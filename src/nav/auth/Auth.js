import React from 'react'
import {
  View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native'

import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import amplifyLogo from "../../../assets/amplify.png"

const { width } = Dimensions.get('window')

class Auth extends React.Component {
  state = {
    showSignUp: false,
    formType: 'showSignIn'
  }
  toggleAuthType = formType => {
    this.setState({ formType })
  }
  render() {
    const showSignIn = this.state.formType === 'showSignIn'
    const showSignUp = this.state.formType === 'showSignUp'
    const showForgotPassword = this.state.formType === 'showForgotPassword'
    return (
      <KeyboardAvoidingView
      style={styles.container}
        behavior={Platform.Os == "ios" ? "padding" : "height"}
      >
          
          <Text style={styles.title}>Gativan</Text>
          <Text style={styles.subtitle}>Enhancing Motion Performance</Text>
          { showSignIn && (
            <SignIn
              toggleAuthType={this.toggleAuthType}
              updateAuth={() => this.props.updateAuth('mainNav')}
            />
          ) }
          { showSignUp && <SignUp toggleAuthType={this.toggleAuthType} /> }
          { showForgotPassword && <ForgotPassword toggleAuthType={this.toggleAuthType} /> }
          <View style={{ position: 'absolute', bottom: 40 }}>
            {
              showSignUp || showForgotPassword ? (
                <Text style={styles.bottomMessage}>Already signed up? <Text
                style={styles.bottomMessageHighlight}
                onPress={() => this.toggleAuthType('showSignIn')}>&nbsp;&nbsp;Sign In</Text></Text>
              ) : (
                <Text style={styles.bottomMessage}>Need an account?
                  <Text
                    onPress={() => this.toggleAuthType('showSignUp')}
                    style={styles.bottomMessageHighlight}>&nbsp;&nbsp;Sign Up</Text>
                </Text>
              )
            }
          </View>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={amplifyLogo}
          />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f5597',
    justifyContent: 'center',
    alignItems: 'center',
    // Color: 'blue',
    paddingBottom: 40
  },  
  logo: {
    height: width / 3.5,
    width:  width / 2.75
  },
  title: {
    fontSize: 52,
    marginTop: 15,
    fontFamily: 'SourceSansPro-SemiBold',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#ffffff',
    fontFamily: 'SourceSansPro-Regular',
  },
  bottomMessage: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18
  },
  bottomMessageHighlight: {
    color: '#f4a63b',
    paddingLeft: 10
  }
})

export default Auth