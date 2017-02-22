import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'
import SmallIcon from '../small-icon'
import weatherIcons from '../../utils/weather-icons'

export default class TidePhrase extends Component {
  get prepareIcon() {
    return weatherIcons(this.props.icon)
  }

  render() {
    const { weather } = this.props

    return (
      <View style={styles.container}>
        <SmallIcon source={this.prepareIcon} />
        <Text style={styles.weather}>{weather}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: BaseStyle.baseSpacing,
    alignItems: 'center',
  },
  weather: {
    fontSize: BaseStyle.baseFontSize,
    color: BaseStyle.baseTextColor,
    fontFamily: BaseStyle.bodyFontFamily,
  },
})
