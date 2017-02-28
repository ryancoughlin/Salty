import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native'

import _ from 'lodash'
import BaseStyle from '../../base-styles'

export default class TideChart extends Component {
  get formattedWind() {
    return _.map(this.props.wind, (wind) => {
      return {
        ...wind,
        time: new Date(wind.time),
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={190}
            width={2500}
            scale={{ x: 'time' }}
            padding={{ top: 30, right: 40, bottom: 40, left: 30 }}
          >
            <VictoryBar
              y="windSpeed"
              x="time"
              data={this.formattedWind}
              labelComponent={
                <VictoryLabel
                  dy={0.25}
                  dx={-2}
                  textAnchor="middle"
                />
              }
              labels={datum => datum.y}
              style={{
                data: {
                  fill: BaseStyle.actionColor,
                  width: 34,
                  strokeLinejoin: 'round',
                  strokeWidth: 6,
                  stroke: BaseStyle.actionColor,
                },
                labels: {
                  fontSize: 12,
                  fontFamily: BaseStyle.numericFontFamily,
                  fill: BaseStyle.baseTextColor,
                }
              }}
            />
            <VictoryAxis
              tickValues={
                _.map(this.formattedWind, (wind) => {
                  return wind.time
                })
              }
              style={BaseStyle.chartAxisStyles}
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
    backgroundColor: 'white',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
