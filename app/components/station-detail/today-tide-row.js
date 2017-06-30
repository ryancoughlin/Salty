import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import _ from 'lodash'
import moment from 'moment'
import BaseStyle from '../../base-styles'

export default class NextTideRow extends Component {
  formatTideTime(time) {
    return moment.utc(time).local().format('hh:mma')
  }

  formatTideHeight(height) {
    return `${height.toFixed(1)}'`
  }

  get pastTideStyle() {
    const time = this.props.tide.time
    const now = moment()

    if (moment.utc(time).local().diff(now, 'minutes') < 0) {
      return styles.pastTide
    }
  }

  render() {
    const { tide } = this.props

    return (
      <View style={styles.futureTideRow}>
        <Text style={[styles.futureTideType, this.pastTideStyle]}>{_.upperFirst(tide.type)}</Text>
        <Text style={[styles.futureTideInfo, this.pastTideStyle]}>
          {this.formatTideTime(tide.time)} / {this.formatTideHeight(tide.height)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  futureTideRow: {
    marginLeft: 61,
    flexDirection: 'row',
    marginBottom: 5,
  },
  futureTideType: {
    width: 40,
    fontWeight: '600',
    fontSize: 14,
  },
  futureTideInfo: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: 14,
  },
  pastTide: {
    textDecorationLine: 'line-through',
  },
})
