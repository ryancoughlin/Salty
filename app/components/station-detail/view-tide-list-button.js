import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { Navigation } from 'react-native-navigation'

import BaseStyle from '../../base-styles'

export default class extends Component {
  openTideList() {
    const { tideTable } = this.props

    Navigation.showModal({
      title: 'Tides',
      screen: 'Salty.TideList',
      passProps: { tides: tideTable },
      navigatorStyle: BaseStyle.navigationBarStyles,
    })
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.openTideList.bind(this)}
        style={styles.container}
      >
        <Text style={styles.viewTidesText}>view all</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  viewTidesText: {
    fontSize: 14,
    color: BaseStyle.subtleColor,
    fontFamily: BaseStyle.bodyFontFamily,
  },
})
