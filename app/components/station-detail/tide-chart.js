import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native'

import moment from 'moment'
import _ from 'lodash'
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native'

import BaseStyle from '../../base-styles'
import chartEdges from '../../assets/images/chart/chart-edges.png'

export default class TideChart extends Component {
  render() {
    const { tides } = this.props

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={230}
            width={2100}
            scale={{ x: 'time', y: 'linear' }}
          >
            <VictoryAxis
              scale="time"
              orientation="bottom"
              tickValues={
                _.map(tides, (tide) => {
                  return tide.time
                })
              }
              tickFormat={
                _.map(tides, (tide) => {
                  return moment(tide.time).format('ha')
                })
              }
              style={{
                axis: { stroke: 'white' },
                tickLabels: {
                  fontSize: 10,
                  padding: 5,
                  fontFamily: BaseStyle.numericFontFamily,
                  fill: BaseStyle.subtleColor,
                },
              }}
            />
            <VictoryLine
              interpolation="cardinal"
              x="time"
              y="height"
              data={tides}
              style={{
                data: {
                  stroke: BaseStyle.actionColor,
                  strokeWidth: 3,
                }
              }}
            />
            <VictoryScatter
              x="time"
              y="height"
              data={tides}
              labels={(datum) => datum.y}
              labelComponent={<VictoryLabel dy={-0.3 } text={(datum) =>  Math.round( datum.y * 10 ) / 10}/>}
              size={7}
              style={{
                labels: {
                  fill: BaseStyle.baseTextColor,
                  fontFamily: BaseStyle.numericFontFamily,
                  fontSize: 12,
                },
                data: {
                  strokeWidth: 5,
                  fill: BaseStyle.actionColor,
                  stroke: 'white',
                },
              }}
            />
          </VictoryChart>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
