import React, { Component } from 'react'
import { View } from 'react-native'
import _ from 'lodash'
import moment from 'moment'

import PanelHeader from './panel-header'
import WaterTemperatureChart from './water-temperature-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'

export default class WaterTemperatureCard extends Component {
  get findCurrentWaterTemperature() {
    const { data } = this.props
    const index = _.findIndex(data, (temperature) => {
      const time = moment.utc(temperature.time).local()
      return moment().diff(time) <= 0
    })

    if (index === -1) {
      return `Currently ${data[0].temperature}°`
    }
    return `Currently ${data[index].temperature}°`
  }

  render() {
    const { data } = this.props

    return (
      <View style={BaseStyle.whiteCard}>
        <PanelHeader headerText="Water Temperature" bodyText={this.findCurrentWaterTemperature} />
        {!_.isEmpty(data) ? <WaterTemperatureChart data={data} /> : <ActivityOverlay /> }
      </View>
    )
  }
}
