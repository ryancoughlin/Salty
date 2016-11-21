import React, { Component } from 'react'

import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import { VictoryAxis } from 'victory-native'

export default class TideAxis extends Component {
  render() {
    const { rawTides } = this.props
    console.log(rawTides)
    return (
      <VictoryAxis
        tickValues={
          _.map(rawTides, (tide) => {
            const time = moment(tide.time).format('ha')
            return time
          })
        }
        scale={'time'}
        tickFormat={(tick) => tick}
        style={{
          ticks: {stroke: 'red' },
          axis: { stroke: 'red', strokeWidth: 2 },
          tickLabels: { fill: '#36669B', fontSize: 20 },
        }}
      />
    )
  }
}
