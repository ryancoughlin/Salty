import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import moment from 'moment'

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
    fontFamily: BaseStyle.headlineFontFamily,
  }
})
