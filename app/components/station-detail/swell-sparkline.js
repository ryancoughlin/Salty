import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native'
import _ from 'lodash'

import BaseStyle from '../../base-styles'

export default class SwellSparkline extends Component {
  get formatSwell() {
    return _.map(this.props.swell, swell => ({
      height: swell.height,
      time: new Date(swell.time),
    }))
  }

  render() {
    return (
      <VictoryLine
        height={30}
        width={86}
        padding={0}
        domainPadding={4}
        data={this.formatSwell}
        interpolation="monotoneX"
        x="time"
        y="height"
        style={{
          data: {
            stroke: '#2D7EB4',
            strokeWidth: 2.25,
          },
        }}
      />
    )
  }
}
