import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import IconHeader from '../icon-header'
import WindChart from './wind-chart'

import windIcon from '../../assets/images/wind.png'

export default class extends Component {
  render() {
    const { wind } = this.props

    return (
      <View style={styles.container}>
        <IconHeader text="Wind Forecast" icon={windIcon} />
        <WindChart wind={wind} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: BaseStyle.largeSpacing,
  },
})
