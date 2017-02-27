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
    return this.props.wind.map((w, i) => {
      return Object.assign({}, this.props.wind[i], {time: new Date(w.time)})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={230}
            width={2500}
            scale={{x: "time"}}
          >
            <VictoryBar
              y="windSpeed"
              x="time"
              data={this.formattedWind}
              labelComponent={
                <VictoryLabel
                  dy={-0.25}
                  dx={-20}
                  textAnchor="middle"
                />
              }
              labels={
                (datum) => `${datum.y}mph`
              }
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
              style={{
                axis: { stroke: 'transparent' },
                tickLabels: {
                  fontSize: 10,
                  fontFamily: BaseStyle.numericFontFamily,
                  fill: BaseStyle.subtleColor,
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
