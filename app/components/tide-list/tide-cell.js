import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import moment from 'moment'
import _ from 'lodash'
import BaseStyle from '../../base-styles'
import TideDirectionArrow from './tide-direction-arrow'

export default class extends Component {
  get prettyTideTime() {
    return moment.utc(this.props.tide.time).local().format('hh:mma')
  }

  render() {
    const { tide } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TideDirectionArrow direction={tide.type} style={styles.tideArrow} />
          <Text style={styles.tideType}>
            {_.upperFirst(tide.type)}
          </Text>
          <Text style={styles.digitText}>
            {this.prettyTideTime}
          </Text>
        </View>
        <Text style={styles.digitText}>
          {tide.height}&apos;
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseStyle.baseBackgroundColor,
    flexDirection: 'row',
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: BaseStyle.baseSpacing,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tideArrow: {
    width: 14,
    height: 14,
  },
  tideType: {
    color: BaseStyle.baseTextColor,
    fontWeight: '500',
    fontSize: 14,
    width: 40,
  },
  digitText: {
    color: BaseStyle.baseTextColor,
    fontSize: BaseStyle.smallNumericFontSize,
    fontFamily: BaseStyle.numericFont,
  },
})
