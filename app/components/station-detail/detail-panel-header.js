import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'

export default class DetailPanelHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: -40,
    },
    shadowOpacity: 0.07,
    shadowRadius: 30,
  },
})
