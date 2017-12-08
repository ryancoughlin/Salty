import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory-native'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import BarWindDirection from './bar-wind-direction'

export default class SwellChart extends Component {
  get formattedWind() {
    return _.flatMap(this.props.swell, day =>
      _.map(day, swell => ({
        ...swell,
        time: new Date(swell.time),
      })),
    )
  }

  render() {
    console.log(this.props.swell)
    return (
      <ScrollView style={{ flex: 1 }} horizontal>
        <VictoryChart
          height={130}
          width={1700}
          padding={{
            top: 30,
            right: 20,
            bottom: 48,
            left: 50,
          }}
        >
          <VictoryBar
            dataComponent={<BarWindDirection color="#164F75" />}
            y="height"
            x="time"
            data={this.formattedWind}
            labels={datum => `${datum.y}'`}
            labelComponent={<VictoryLabel dx={2} text={datum => `${datum.y}'`} />}
            style={{
              labels: {
                fontSize: BaseStyle.smallNumericFontSize,
                fontFamily: BaseStyle.numericFontSemiBold,
                fill: '#164F75',
              },
            }}
          />
          <VictoryAxis
            scale={{ x: 'time' }}
            offsetY={22}
            tickValues={_.map(this.formattedWind, wind => wind.time)}
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fontSize: 10,
                padding: 5,
                fontFamily: BaseStyle.numericFont,
                fill: '#164F75',
              },
            }}
          />
        </VictoryChart>
      </ScrollView>
    )
  }
}
