import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import BaseStyle from '../base-styles'

export default class MapCallout extends Component {
  get formatStationCoordiantes() {
    const { latitude, longitude } = this.props.station.location
    return `${latitude} N ${longitude} W`
  }

  render() {
    const { station } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.stationName} numberOfLines={1} ellipsizeMode={'tail'}>
            {station.name}
          </Text>
          <Text style={styles.stationLocation}>{this.formatStationCoordiantes}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'relative',
    padding: 10,
    borderBottomColor: BaseStyle.actionColor,
    borderBottomWidth: 2,
    marginBottom: BaseStyle.smallSpacing,
  },
  textContainer: {
    zIndex: 1,
  },
  stationName: {
    fontSize: BaseStyle.smallFontSize,
    marginBottom: 1,
  },
  stationLocation: {
    fontFamily: BaseStyle.numericFont,
    fontSize: 10,
    color: BaseStyle.subtleColor,
  },
})
