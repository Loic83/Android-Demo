/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default class CommandeProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false 
    }
  }
  
  pressMe = () => {
    this.setState({ isLoading: true })
  }
  	
  render() {
    return (
    /*	const content = () => {if {(this.state.isLoading == true)
  
    		return <ActivityIndicator size='large'/> 
    	}
      }*/
    	
    /*  <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>*/

     <View style={styles.container}>
      <Text style={styles.welcome}>Hello World !</Text>
      <Text style={styles.instructions}>Veuillez suivre les instructions !</Text>
      <TouchableOpacity style={styles.button} // on ajoute un "bouton" qui requête une autre bière aléatoire
          >
            <Text onPress={this.pressMe}>Press me !</Text>
          </TouchableOpacity>
     
       {this.state.isLoading &&
       		<ActivityIndicator size="large"/>  
       	} 
      	{/*<ActivityIndicator size="large" />*/}   
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
    button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('CommandeProject', () => CommandeProject);
