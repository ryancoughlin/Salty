import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'

import PanelHeader from './panel-header'
import WaterTemperatureChart from './water-temperature-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'

const WaterTemperatureCard = class extends Component {
  get findCurrentWaterTemperature() {
    if (!_.isEmpty(this.props.current.waterTemperature)) {
      const { waterTemperature } = this.props.current
      const index = _.findIndex(waterTemperature, (temperature) => {
        const time = moment.utc(temperature.time).local()
        return moment().diff(time) <= 0
      })

      if (waterTemperature[index] !== undefined) {
        return `Currently ${waterTemperature[index].temperature}°`
      } else {
        return 'Loading data...'
      }
    }
  }

  render() {
    const { waterTemperature } = this.props.current

    return (
      <View style={BaseStyle.whiteCard}>
        <PanelHeader headerText="Water Temperature" bodyText={this.findCurrentWaterTemperature} />
        {!_.isEmpty(waterTemperature) ? <WaterTemperatureChart data={waterTemperature} />
         : <ActivityOverlay /> }
      </View>
    )
  }
}


const mapStateToProps = ({ stations }) => ({
  current: stations.current,
})

export default connect(mapStateToProps)(WaterTemperatureCard)
