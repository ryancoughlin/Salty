import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import CountdownTimer from 'react-deadline'
import moment from 'moment'
import BaseStyle from '../../base-styles'

export default class RemainingTideTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: {
        hours: '3',
        minutes: '12',
        seconds: '32',
      },
    }
  }
  formatTideTime(time) {
    return moment(time, 'YYYY-MM-DD HH:mm').format('hh:mma')
  }

  render() {
    const { futureTides, currentTide } = this.props

    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
  },
  futureTideInfo: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: 14,
  },
})
