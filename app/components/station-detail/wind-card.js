import React from 'react'
import { View } from 'react-native'
import _ from 'lodash'

import PanelHeader from './panel-header'
import WindChart from './wind-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'

const WindCard = ({ data }) => (
  <View style={BaseStyle.whiteCard}>
    <PanelHeader headerText="Wind Forecast" bodyText="Speeds in mph" />
    {!_.isEmpty(data) ? <WindChart data={data} /> : <ActivityOverlay /> }
  </View>)

export default WindCard
