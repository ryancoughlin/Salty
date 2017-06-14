import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
} from 'victory-native'
import _ from 'lodash'

import BaseStyle from '../../base-styles'

export default class TideChart extends Component {
  get formattedTides() {
    return _.map(this.props.data, temperature => ({
      ...temperature,
      time: new Date(temperature.time),
    }))
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} horizontal>
        <VictoryChart
          height={180}
          width={1100}
          scale={{ x: 'time', y: 'linear' }}
          padding={{ top: 30, right: 20, bottom: 40, left: 20 }}
        >
          <VictoryAxis
            scale="time"
            orientation="bottom"
            offsetY={30}
            tickValues={_.map(
                this.formattedTides,
                temperature => temperature.time,
              )}
            style={BaseStyle.chartAxisStyles}
          />
          <VictoryLine
            interpolation={'monotoneX'}
            domainPadding={{ x: [3, 0] }}
            data={this.formattedTides}
            x="time"
            y="temperature"
            style={{
              data: {
                stroke: BaseStyle.actionColor,
                strokeWidth: 3,
              },
            }}
          />
          <VictoryScatter
            x="time"
            y="temperature"
            data={this.formattedTides}
            labels={datum => `${datum.y}°`}
            size={6}
            style={{
              labels: {
                fill: BaseStyle.baseTextColor,
                fontFamily: BaseStyle.numericFontFamily,
                fontSize: BaseStyle.smallNumericFontSize,
              },
              data: {
                strokeWidth: 4,
                fill: BaseStyle.actionColor,
                stroke: 'white',
              },
            }}
          />
        </VictoryChart>
      </ScrollView>
    )
  }
}
