import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'
import windArrow from '../../assets/images/chart/windArrow.png'

export default class WindBar extends Component {
  render() {
    const { barHeight, wind } = this.props

    const barHeightStyle = { height: barHeight }
    const barColorStyle = (wind.windSpeed >= 16) ? styles.highWindBarColor : styles.windBarColor
    const timeColorStyle = (wind.windSpeed >= 16) ? styles.highWindTextColor : styles.timeTextColor
    const windDirectionStyle = { transform: [{rotate: `${wind.windBearing}deg`}] }

    return (
      <View style={styles.container}>
        <Image source={windArrow} style={[windDirectionStyle, styles.windArrow]}/>
        <View style={[barHeightStyle, styles.bar, barColorStyle]}>
          <Text style={styles.windSpeedText}>{wind.windSpeed}</Text>
        </View>
        <Text style={[styles.timeText, timeColorStyle]}>{wind.time}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
  },
  bar: {
    borderRadius: 4,
    backgroundColor: BaseStyle.subtleColor,
    alignItems: 'center',
    width: 40,
  },
  windArrow: {
    marginBottom: 12,
  },
  windSpeedText: {
    fontSize: 12,
    color: 'white',
    marginTop: 6,
    fontFamily: BaseStyle.numericFontFamily,
  },
  timeText: {
    color: BaseStyle.chartLabelColor,
    fontSize: 11,
    marginTop: 8,
    fontFamily: BaseStyle.numericFontFamily,
  },
  highWindTextColor: {
    color: BaseStyle.warningColor,
  },
  timeTextColor: {
    color: BaseStyle.chartLabelColor,
  },
  highWindBarColor: {
    backgroundColor: BaseStyle.warningColor,
  },
  windBarColor: {
    backgroundColor: BaseStyle.subtleColor,
  },
})
