import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import IconHeader from '../icon-header'
import moment from 'moment'

import tideIcon from '../../assets/images/tide.png'

export default class extends Component {
  render() {
    const { tide } = this.props

    return (
      <View style={styles.container}>
        <IconHeader text="Tides" icon={tideIcon}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
