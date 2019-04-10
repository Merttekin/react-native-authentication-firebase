import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import LoginForm from './src/LoginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyCF1p2fLj_16PiKleWHYXh7WBFL0xv9_0c',
        authDomain: 'authenticationreactnativ-85f71.firebaseapp.com',
        databaseURL: 'https://authenticationreactnativ-85f71.firebaseio.com',
        projectId: 'authenticationreactnativ-85f71',
        storageBucket: 'authenticationreactnativ-85f71.appspot.com',
        messagingSenderId: '690092683124'
      }
    )
  }

  render() {
    return (
      <View>
        <Header headerText="Giriş Ekranı" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
