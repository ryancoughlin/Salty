import React, { Component } from 'react'
import { ScrollView } from 'react-native'
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
    return _.map(this.props.data, data => ({
      temperature: Math.round(data.temperature),
      time: new Date(data.time),
    }))
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} horizontal>
        <VictoryChart
          height={110}
          width={1100}
          scale={{ x: 'time', y: 'linear' }}
          padding={{
 top: 30, right: 20, bottom: 48, left: 50,
}}
        >
          <VictoryAxis
            scale={{ x: 'time' }}
            orientation="bottom"
            offsetY={30}
            tickValues={_.map(
                this.formattedTides,
                temperature => temperature.time,
              )}
            style={BaseStyle.chartAxisStyles}
          />
          <VictoryLine
            interpolation="monotoneX"
            domainPadding={{ x: [3, 0] }}
            data={this.formattedTides}
            x="time"
            y="temperature"
            style={{
              data: {
                stroke: BaseStyle.actionColor,
                strokeWidth: 2,
              },
            }}
          />
          <VictoryScatter
            x="time"
            y="temperature"
            data={this.formattedTides}
            labels={datum => `${Math.round(datum.y * 10) / 10}°`}
            size={4}
            style={{
              labels: {
                fill: BaseStyle.baseTextColor,
                fontFamily: BaseStyle.numericFont,
                fontSize: BaseStyle.smallNumericFontSize,
              },
              data: {
                strokeWidth: 3,
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
