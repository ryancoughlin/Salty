import React, { Component } from 'react'
import { VictoryLine } from 'victory-native'
import _ from 'lodash'

export default class SwellSparkline extends Component {
  get formatSwell() {
    return _.map(this.props.swell, swell => ({
      height: swell.height,
      time: new Date(swell.time)
    }))
  }

  render() {
    return (
      <VictoryLine
        height={30}
        width={100}
        padding={0}
        domainPadding={4}
        data={this.formatSwell}
        interpolation="basis"
        x="time"
        y="height"
        style={{
          data: {
            stroke: '#2D7EB4',
            strokeWidth: 2
          }
        }}
      />
    )
  }
}
