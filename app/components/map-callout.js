import React, { Component } from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../base-styles'
import callout from '../assets/images/map/callout.png'

export default class MapCallout extends Component {
  get formatStationLocation() {
    const { station } = this.props
    const latitude = station.location[1]
    const longitude = station.location[0]

    return `${latitude} N ${longitude} W`
  }

  render() {
    const { station } = this.props

    return (
      <View style={styles.container}>
        <Image source={callout} style={styles.callout} />
        <View style={styles.textContainer}>
          <Text
            style={styles.stationName}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {station.name}
          </Text>
          <Text style={styles.stationLocation}>{this.formatStationLocation}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 258,
    height: 98,
  },
  textContainer: {
    zIndex: 1,
    marginTop: 31,
    marginLeft: 40,
  },
  callout: {
    position: 'absolute',
  },
  stationName: {
    fontSize: BaseStyle.smallFontSize,
    marginBottom: 1,
    width: 170,
  },
  stationLocation: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: 10,
    color: BaseStyle.subtleColor,
  },
})
