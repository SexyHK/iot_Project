import React from 'react';
import { StyleSheet, Image, View, StatusBar, Text } from 'react-native';

export default class SplashScreen extends React.PureComponent {
	static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={viewStyles.container}>
      	<StatusBar hidden={true} />
        <Image
        style={imageStyles.container}
        source={require('../assets/SplashScreenImg.png')}></Image>
        <Text> Loading... </ Text>
      </View>
    );
  }
}

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#285d5e',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
})

const imageStyles = StyleSheet.create({
  container: {
  	width: 150, 
  	height: 150,
    flex: 1,
    backgroundColor: '#285d5e',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'
  },
})