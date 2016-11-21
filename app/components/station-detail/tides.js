import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import moment from 'moment'

import BaseStyle from '../../base-styles'
import IconHeader from '../icon-header'
import TideChart from '../tide-chart'

import tideIcon from '../../assets/images/tide.png'

export default class extends Component {
  render() {
    const { rawTides } = this.props

    return (
      <View style={styles.container}>
        <IconHeader text="Tides" icon={tideIcon}/>
        <TideChart rawTides={rawTides} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
