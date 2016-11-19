import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={BaseStyle.baseBackgroundColor}
          barStyle='light-content'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
