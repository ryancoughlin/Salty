import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import TideChart from './tide-chart'

export default class extends Component {
  render() {
    const { tideChart } = this.props

    return (
      <View style={styles.container}>
        <TideChart tides={tideChart} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: BaseStyle.largeSpacing,
  },
})
