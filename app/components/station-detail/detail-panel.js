import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import TideChart from './tide-chart'
import WindChart from './wind-chart'

export default class DetailPanel extends Component {

  render() {
    const { wind, tideChart } = this.props

    return (
      <View>
        <TideChart tides={tideChart} />
        <WindChart wind={wind} />
      </View>
    )
  }
}
