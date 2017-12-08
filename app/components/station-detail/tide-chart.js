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
    return _.map(this.props.data, tide => ({
      ...tide,
      time: new Date(tide.time),
    }))
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} horizontal>
        <VictoryChart
          height={150}
          width={1100}
          scale={{ x: 'time', y: 'linear' }}
          padding={{
 top: 30, right: 20, bottom: 48, left: 50,
}}
        >
          <VictoryAxis
            scale={{ x: 'time' }}
            offsetY={30}
            tickValues={_.map(this.formattedTides, tide => tide.time)}
            style={BaseStyle.chartAxisStyles}
          />
          <VictoryLine
            data={this.formattedTides}
            interpolation="basis"
            x="time"
            y="height"
            scale={{ x: 'time' }}
            style={{
              data: {
                stroke: BaseStyle.actionColor,
                strokeWidth: 2,
              },
            }}
          />
          <VictoryScatter
            x="time"
            y="height"
            data={this.formattedTides}
            labels={datum => `${datum.y}'`}
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
