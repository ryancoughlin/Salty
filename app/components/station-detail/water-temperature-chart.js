import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { VictoryLine, VictoryChart, VictoryScatter, VictoryAxis, VictoryArea } from 'victory-native'
import _ from 'lodash'
import moment from 'moment'

import BaseStyle from '../../base-styles'
import ChartPanel from './chart-panel'

export default class TideChart extends Component {
  get formattedTides() {
    return _.map(this.props.waterTemperature, temperature => ({
      ...temperature,
      time: new Date(temperature.time),
    }))
  }

  get findCurrentWaterTemperature() {
    const { waterTemperature } = this.props
    console.log(this.props)
    const index = _.findIndex(waterTemperature, (temperature) => {
      const time = moment.utc(temperature.time).local()
      return moment().diff(time) <= 0
    })

    if (index === -1) {
      return `Currently ${waterTemperature[0].temperature}°`
    } else {
      return `Currently ${waterTemperature[index].temperature}°`
    }
  }

  render() {
    return (
      <ChartPanel headerText="Water Temperature" bodyText={this.findCurrentWaterTemperature}>
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
              tickValues={_.map(this.formattedTides, temperature => temperature.time)}
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
                  fontSize: 12,
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
      </ChartPanel>
    )
  }
}
