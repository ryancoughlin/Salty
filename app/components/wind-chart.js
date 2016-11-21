import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native'

import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../base-styles'
import chartEdges from '../assets/images/chart/chart-edges.png'
import WindBar from './wind-bar'

export default class WindChart extends Component {
  renderWindBars() {
    const { wind } = this.props
    const modulate = this.modulate

    return _.map(wind, function(hourlyWind) {
      const barHeight = modulate(hourlyWind.windSpeed, [0, 17], [0, 100])

      return (
        <WindBar
          barHeight={parseInt(barHeight)}
          wind={hourlyWind}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.edgesContainer} pointerEvents='none'>
          <Image source={chartEdges}/>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'flex-end'}}>
          { this.renderWindBars() }
        </ScrollView>
      </View>
    )
  }

  modulate(value, rangeA, rangeB, limit) {
    var fromHigh, fromLow, result, toHigh, toLow

    if (limit == null) {
      limit = false
    }

    fromLow = rangeA[0], fromHigh = rangeA[1]
    toLow = rangeB[0], toHigh = rangeB[1]
    return toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow))
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 160,
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
