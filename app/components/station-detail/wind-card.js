import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import PanelHeader from './panel-header'
import WindChart from './wind-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'

const WindCard = ({ current }) => (
  <View style={BaseStyle.whiteCard}>
    <PanelHeader headerText="Wind Forecast" bodyText="Speeds in mph" />
    {!_.isEmpty(current.weather.wind) ? <WindChart data={current.weather.wind} />
    : <ActivityOverlay /> }
  </View>)

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
})

export default connect(mapStateToProps)(WindCard)
