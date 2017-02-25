import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import BaseStyle from '../../base-styles'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableOpacity>
            <Text>Tides</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Wind</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    height: 80,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: -40,
    },
    shadowOpacity: 0.07,
    shadowRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  activeTitle: {
    color: 'teal',
  },
  tab: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  activeTitle: {
    color: 'teal',
  },
})
