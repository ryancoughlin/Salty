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
    return moment(this.props.date).format('dddd, MMM D')
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
    height: 70,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  date: {
    color: BaseStyle.baseTextColor,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
})
