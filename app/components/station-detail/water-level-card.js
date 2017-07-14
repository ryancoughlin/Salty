import React, { Component } from 'react'
import { View } from 'react-native'
import _ from 'lodash'

import PanelHeader from './panel-header'
import TideChart from './tide-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'


export default class WaterLevelCard extends Component {
  render() {
    const { data } = this.props

    return (
      <View style={BaseStyle.whiteCard}>
        <PanelHeader headerText="Water Levels" bodyText="Next 12 hours" />
        {!_.isEmpty(data) ? <TideChart data={data} /> : <ActivityOverlay /> }
      </View>
    )
  }
}
