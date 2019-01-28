import React from 'react';
import { StyleSheet, Image, View, StatusBar, Text } from 'react-native';

export default class MainView extends React.PureComponent {
	static navigationOptions = {
        header: null
    }
  render() {
    return (
      <View style={viewStyles.container}>
      	<StatusBar hidden={true} />
        <Text style={textStyles.title}> Country name </ Text>
        <Text style={textStyles.title}> Country Info </ Text>
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

const textStyles = StyleSheet.create({
  title: {
      marginTop: '-40%',
      color: '#97ef87',
      fontSize: 28,
      fontWeight: '400'
  },
})