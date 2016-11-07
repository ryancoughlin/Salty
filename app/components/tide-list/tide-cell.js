import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import moment from 'moment'
import TideDirectionArrow from './tide-direction-arrow'

export default class extends Component {
  get prettyTideTime() {
    const { tide } = this.props
    return moment(tide.time).format('h:mm a')
  }

  render() {
    const { tide } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{this.prettyTideTime}</Text>
        </View>
        <TideDirectionArrow direction={tide.tide} style={styles.tideArrow} />
        <View style={styles.directionContainer}>
          <Text style={styles.direction}>{tide.tide}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseStyle.baseBackgroundColor,
    flexDirection: 'row',
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    alignItems: 'flex-end',
    width: 100,
  },
  time: {
    color: BaseStyle.baseTextColor,
    fontSize: BaseStyle.baseFontSize,
  },
  tideArrow: {
    width: 120,
  },
  directionContainer: {
    width: 100,
  },
  direction: {
    color: BaseStyle.actionColor,
    fontSize: BaseStyle.baseFontSize,
  },
})
