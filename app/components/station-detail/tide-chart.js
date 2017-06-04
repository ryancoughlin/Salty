import React, { Component } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis } from 'victory-native'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import ChartPanel from './chart-panel'

export default class TideChart extends Component {
  get formattedTides() {
    return _.map(this.props.tides, tide => ({
      ...tide,
      time: new Date(tide.time),
    }))
  }

  render() {
    if (!this.props.tides) {
      return <ActivityIndicator style={styles.loadingIndicator} size="large" />
    }

    return (
      <ChartPanel headerText="Tide Depths" bodyText="Over the next 24 hours">
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={170}
            width={1100}
            scale={{ x: 'time', y: 'linear' }}
            padding={{ top: 30, right: 20, bottom: 40, left: 20 }}
          >
            <VictoryAxis
              scale="time"
              orientation="bottom"
              offsetY={30}
              tickValues={_.map(this.formattedTides, tide => tide.time)}
              style={BaseStyle.chartAxisStyles}
            />
            <VictoryLine
              domainPadding={{ x: [3, 0] }}
              data={this.formattedTides}
              interpolation="cardinal"
              x="time"
              y="height"
              style={{
                data: {
                  stroke: BaseStyle.actionColor,
                  strokeWidth: 3,
                },
              }}
            />
            <VictoryScatter
              x="time"
              y="height"
              data={this.formattedTides}
              labels={datum => `${datum.y}`}
              size={6}
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
      </ChartPanel>
    )
  }
}
