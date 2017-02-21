import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import moment from 'moment'

import BaseStyle from '../../base-styles'

export default class extends Component {
  get formattedDate() {
    const { date } = this.props
    return moment(date).format('dddd, MMM D')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.formattedDate}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseStyle.baseBackgroundColor,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  date: {
    color: BaseStyle.baseTextColor,
    fontSize: 26,
    marginBottom: 8,
  },
})
