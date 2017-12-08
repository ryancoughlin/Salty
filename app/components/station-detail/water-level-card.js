import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import PanelHeader from './panel-header'
import TideChart from './tide-chart'
import ActivityOverlay from '../activity-overlay'
import BaseStyle from '../../base-styles'

const WaterLevelCard = ({ current }) => (
  <View style={BaseStyle.whiteCard}>
    <PanelHeader headerText="Water Levels" bodyText="Next 12 hours" />
    {!_.isEmpty(current.chart) ? <TideChart data={current.chart} /> : <ActivityOverlay />}
  </View>
)

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
})

export default connect(mapStateToProps)(WaterLevelCard)
