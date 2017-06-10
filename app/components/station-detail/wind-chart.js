import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory-native'

import _ from 'lodash'
import BaseStyle from '../../base-styles'
import ChartPanel from './chart-panel'

export default class WindChart extends Component {
  get formattedWind() {
    return _.map(this.props.wind, wind => ({
      ...wind,
      time: new Date(wind.time),
    }))
  }

  render() {
    return (
      <ChartPanel headerText="Wind Forecast" bodyText="Speeds in mph">
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={170}
            width={2500}
            scale={{ x: 'time' }}
            padding={{ top: 30, right: 40, bottom: 36, left: 30 }}
          >
            <VictoryBar
              y="windSpeed"
              x="time"
              data={this.formattedWind}
              labelComponent={<VictoryLabel dy={0.25} textAnchor="middle" />}
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
                },
              }}
            />
            <VictoryAxis
              offsetY={30}
              tickValues={_.map(this.formattedWind, wind => wind.time)}
              style={BaseStyle.chartAxisStyles}
            />
          </VictoryChart>
        </ScrollView>
      </ChartPanel>
    )
  }
}
