import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
} from 'victory-native'

import _ from 'lodash'
import BarWindDirection from './bar-wind-direction'
import BaseStyle from '../../base-styles'

export default class WindChart extends Component {
  get formattedWind() {
    return _.map(this.props.data, wind => ({
      ...wind,
      time: new Date(wind.time),
    }))
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} horizontal>
        <VictoryChart
          height={130}
          width={2000}
          scale={{ x: 'time' }}
          padding={{
 top: 30, right: 20, bottom: 48, left: 50,
}}
        >
          <VictoryBar
            y="windSpeed"
            x="time"
            data={this.formattedWind}
            dataComponent={<BarWindDirection color={BaseStyle.actionColor} />}
            labels={datum => datum.y}
            style={{
              labels: {
                fontSize: BaseStyle.smallNumericFontSize,
                fontFamily: BaseStyle.numericFont,
                fill: BaseStyle.baseTextColor,
              },
            }}
          />
          <VictoryAxis
            scale={{ x: 'time' }}
            offsetY={22}
            tickValues={_.map(this.formattedWind, wind => wind.time)}
            style={BaseStyle.chartAxisStyles}
          />
        </VictoryChart>
      </ScrollView>
    )
  }
}
